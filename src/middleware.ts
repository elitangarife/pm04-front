import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse, NextRequest } from "next/server";

export function middleware (req: NextRequest) {
  const {pathname, origin} = req.nextUrl;

  if((pathname === "/dashboardUser" || pathname === "/cart") && !req.cookies.get("userSession")?.value){
    const loginURL = new NextURL("/login", origin)

  return NextResponse.redirect(loginURL)

  }else{
    return NextResponse.next()
  }
  
}