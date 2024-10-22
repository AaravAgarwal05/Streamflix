import { NextRequest, NextResponse } from "next/server";
import { findUser } from "@/actions/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const response = await findUser(email);
    if (response) {
      return NextResponse.json({
        message: "User found successfully",
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: "User not found",
        status: 404,
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
