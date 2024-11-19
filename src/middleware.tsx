import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  const path = new URL(request.nextUrl).pathname;

  const isPublic =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/logout" ||
    path === "/signup/verifyemail" ||
    path === "/signup/planform" ||
    path === "/signup/regform";
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      const { payload } = await jwtVerify(token.value, secret);
      const user = payload;

      if (isPublic && user.isVerified && user.isSubscribed) {
        return NextResponse.redirect(
          new URL("/home", request.nextUrl).toString()
        );
      }

      if (!isPublic && user.isVerified && !user.isSubscribed) {
        return NextResponse.redirect(
          new URL("/signup/planform", request.nextUrl).toString()
        );
      }

      if (!isPublic && !user.isVerified && !user.isSubscribed) {
        return NextResponse.redirect(
          new URL("/signup/verifyemail", request.nextUrl).toString()
        );
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  } else {
    console.log("Token is undefined");
    if (!isPublic && !token) {
      return NextResponse.redirect(new URL("/", request.nextUrl).toString());
    }
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
    "/signup/planform",
    "/signup/verifyemail",
    "/signup/regform",
  ],
};
