import { NextRequest, NextResponse } from "next/server";
import { fetchUser } from "@/server/serverActions";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    const response = await fetchUser(email);
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
