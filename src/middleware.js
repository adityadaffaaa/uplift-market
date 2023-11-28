import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authUrl = {
  user: ["/login", "/register"],
  vendor: ["/login-vendor", "/register-vendor"],
};

const protectedUrl = {
  user: ["/booking"],
  vendor: ["/dashboard"],
};

const handleNotFoundUrl = {
  user: ["/product-detail"],
};

export default async function middleware(req) {
  const token = await getToken({ req });
  const userRole = token?.user.role;

  if (token) {
    if (
      authUrl.user.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      ) ||
      authUrl.vendor.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      )
    ) {
      if (userRole === "vendor") {
        return NextResponse.redirect(
          new URL("/dashboard", req.url)
        );
      } else if (userRole === "user") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    if (
      protectedUrl.user.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      ) &&
      userRole === "user"
    ) {
      return NextResponse.next();
    } else if (
      protectedUrl.user.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      ) &&
      userRole === "vendor"
    ) {
      return NextResponse.redirect(
        new URL("/dashboard", req.url)
      );
    }

    if (
      protectedUrl.vendor.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      ) &&
      userRole === "user"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (
      protectedUrl.vendor.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      ) &&
      userRole === "vendor"
    ) {
      return NextResponse.next();
    }
  } else if (!token) {
    if (
      protectedUrl.user.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      )
    ) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }
    if (
      protectedUrl.vendor.some((path) =>
        req.nextUrl.pathname.startsWith(path)
      )
    )
      return NextResponse.redirect(
        new URL("/login-vendor", req.url)
      );
  }

  if (
    handleNotFoundUrl.user.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    )
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/booking/:path*",
    "/login",
    "/register",
    "/login-vendor",
    "/register-vendor",
    "/product-detail",
  ],
};
