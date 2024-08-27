import { auth } from '@/config/firebaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { expiresIn, sessionCookieOptions } from '@/data/constants/sessionCookieOptions';

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  if (!idToken) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    const res = NextResponse.json({ success: true });
    res.cookies.set('_session', sessionCookie, sessionCookieOptions);
    return res;
  } catch (error) {
    return new NextResponse('Failed to create session', { status: 500 });
  }
}
