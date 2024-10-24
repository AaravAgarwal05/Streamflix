import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/actions/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    const response = await verifyToken(token);
    console.log(response);
    if (response) {
      return NextResponse.json({
        message: "User verified successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "Invalid token",
        status: 400,
      });
    }
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
