import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      message: "Connected to database",
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
