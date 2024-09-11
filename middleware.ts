// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { auth } from "./src/config/firebaseAdmin"; // Import your Firebase Admin SDK

export async function middleware(req: NextRequest) {
    const sessionCookie = req.cookies.get("session") ?.value; // Get session cookie

    try {
    await auth.verifySessionCookie(sessionCookie as string, true);
    return NextResponse.next(); // Allow request to continue
    } catch (error) {
    // Redirect to login page if session is invalid
    return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard"],
};
    