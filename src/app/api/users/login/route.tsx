import { NextRequest, NextResponse } from "next/server";
import { signIn } from "@/actions/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    await signIn(email, password);
    return NextResponse.json({
      message: "User signed in successfully",
      status: 200,
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
