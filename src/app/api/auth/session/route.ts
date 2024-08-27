import { auth } from '@/config/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  if (!idToken) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Define session expiration time (e.g., 5 days)
  const expiresIn = 60 * 60 * 24 * 5;

  try {
    // Create a session cookie from the ID token
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    // Set session cookie in response (HttpOnly, Secure, etc.)
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    };

    // Send the cookie to the user's browser
    const res = NextResponse.json({ success: true });
    res.cookies.set('_session', sessionCookie, options);
    return res;
  } catch (error) {
    return new NextResponse('Failed to create session', { status: 500 });
  }
}
