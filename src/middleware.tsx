import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = request.cookies.get("session");

  const isPublic = path === "/" || path === "/login" || path === "/signup";

  if (isPublic && session) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  if (!isPublic && !session) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/home", "/comingsoon", "/watchlist", "/signup", "/login"],
};
