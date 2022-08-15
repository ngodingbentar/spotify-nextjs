import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {

  const token = await getToken({req, secret: process.env.JWT_SECRET});
  // console.log('token bos ===', token)

  const { pathname } = req.nextUrl;

  // allow the request if the following is true...
  


  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next()
  }


  if ( !token) {
    console.log('gak ada token')
    // return NextResponse.redirect('/dew')
    // return NextResponse.rewrite(new URL('/dew', req.url))
    // return NextResponse.rewrite(`http://localhost:3000/dew`);
  }
}