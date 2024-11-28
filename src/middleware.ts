import { ServerRuntime } from "next";
import { NextRequest, NextResponse } from "next/server";

export const runtime: ServerRuntime = "experimental-edge";

export default async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        const rewriteResponse = NextResponse.rewrite(new URL('/home', request.url));
        return rewriteResponse;
    }
}