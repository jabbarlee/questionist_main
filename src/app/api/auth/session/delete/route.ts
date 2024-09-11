import { NextResponse } from "next/server";

export async function DELETE() {
    const response = NextResponse.json({ message: "Session cookie cleared" });
  
    // Clear the session cookie by setting it to expire
    response.cookies.set("session", "", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });
  
    return response;
  }