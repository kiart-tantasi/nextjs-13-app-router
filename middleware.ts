import { NextMiddleware, NextResponse } from "next/server";
// import jwt from 'jsonwebtoken'

export const config = {
    // runtime: 'nodejs', // < -- does not work, still edge runtime
    matcher: '/test-md/:path*'
}

export const middleware: NextMiddleware = (request) => {
    // can only run on nodejs runtime
    // const decoded = jwt.decode('abdde')
    // console.log('decoded:', decoded);
    return NextResponse.next()
}
