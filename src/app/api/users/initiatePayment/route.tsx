import { NextRequest, NextResponse } from "next/server";
import { initiatePayment } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, amount } = reqBody;
    const response = await initiatePayment(email, amount);
    return NextResponse.json({
      message: response.message,
      status: response.status,
      order: response.order,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message,
        status: 500,
      });
    } else {
      return NextResponse.json({
        message: "An unknown error occurred",
        status: 500,
      });
    }
  }
}
