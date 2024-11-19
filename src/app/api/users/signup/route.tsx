import { NextRequest, NextResponse } from "next/server";
import { createUser, signIn } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const response = await createUser(email, password);
    if (response.status === 200) {
      const response2 = await signIn(email, password);
      if (response2.status === 200) {
        const newResponse = NextResponse.json({
          status: response2.status,
          message: response2.message,
        });
        newResponse.cookies.set("token", response2.token!, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        return newResponse;
      }
      return NextResponse.json({
        status: response2.status,
        message: response2.message,
      });
    }
    return NextResponse.json({
      status: response.status,
      message: response.message,
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
