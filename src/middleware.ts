import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/login", "/forgot-password", "/portal", "/register"];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get(process.env.NEXT_PUBLIC_BASE_TOKEN!)?.value;

  const isPublic = PUBLIC_ROUTES.includes(req.nextUrl.pathname);

  if (isPublic) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/|favicon.ico|.*\\..*).*)"],
};
