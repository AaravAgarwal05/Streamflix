import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    const response = await verifyToken(token);
    if (response.status === 200) {
      const newResponse = NextResponse.json({
        status: response.status,
        message: response.message,
      });
      newResponse.cookies.set("token", response.token!, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return newResponse;
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
