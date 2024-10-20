import { NextResponse } from "next/server";
import { signOut } from "@/actions/serverActions";

export async function GET() {
  try {
    await signOut();
    return NextResponse.json({
      message: "Logout successful",
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
