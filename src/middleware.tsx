import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = new URL(request.nextUrl).pathname;
  const session = request.cookies.get("session");

  const isPublic = path === "/" || path === "/login" || path === "/signup";

  if (!isPublic && !session) {
    return NextResponse.redirect(new URL("/", request.nextUrl).toString());
  }
}

export const config = {
  matcher: [
    "/",
    "/home",
    "/comingsoon",
    "/watchlist",
    "/signup",
    "/login",
    "/logout",
  ],
};
