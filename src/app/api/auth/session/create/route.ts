import { NextResponse } from "next/server";
import { auth } from "@/config/firebaseAdmin";

export async function POST(req: Request) {
  const { idToken } = await req.json();

  try {
    // Create a session cookie with a 5-day expiration
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn: 60 * 60 * 24 * 5 * 1000 });
    const response = NextResponse.json({ message: "Session cookie set" });

    // Set the session cookie in the response headers
    response.cookies.set("session", sessionCookie, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
