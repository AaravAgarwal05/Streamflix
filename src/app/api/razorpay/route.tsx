import { NextResponse, NextRequest } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/payment";
import connectDB from "@/db/connectDB";
import User from "@/models/user";
import { updateJWTToken } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    console.log("Payment verification request received");
    await connectDB();
    const body = await request.formData();
    const reqBody: Record<string, FormDataEntryValue> = Object.fromEntries(
      body.entries()
    );

    const payment = await Payment.findOne({
      paymentId: reqBody.razorpay_order_id,
    });

    if (!payment) {
      return NextResponse.json({
        status: 400,
        message: `Payment not found for order id: ${reqBody.razorpay_order_id} 😥`,
      });
    }

    const isValid = validatePaymentVerification(
      {
        payment_id: reqBody.razorpay_payment_id as string,
        order_id: reqBody.razorpay_order_id as string,
      },
      reqBody.razorpay_signature as string,
      process.env.RAZORPAY_KEY_SECRET as string
    );

    if (isValid) {
      await Payment.findOneAndUpdate(
        {
          paymentId: reqBody.razorpay_order_id,
        },
        {
          paymentStatus: "success",
        }
      );
      await User.findOneAndUpdate(
        {
          email: payment.email,
        },
        {
          isSubscribed: true,
          subscriptionType:
            payment.amount === 99
              ? "basic"
              : payment.amount === 199
              ? "standard"
              : "premium",
          subscriptionStartDate: new Date(),
          subscriptionEndDate: new Date(
            new Date().setMonth(new Date().getMonth() + 1)
          ),
        }
      );
      const response = await updateJWTToken(payment.email);
      if (response.status === 200) {
        const newResponse = NextResponse.redirect(
          `https://streamflix-smoky.vercel.app/home?paymentStatus=success`
        );
        newResponse.cookies.set("token", response.token!, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        return newResponse;
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: `Payment verification failed for order id: ${reqBody.razorpay_order_id} 😥`,
      });
    }
  } catch (error) {
    console.error("Error during payment processing:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
