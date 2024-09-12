import { auth } from '@/config/firebaseAdmin';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { idToken } = await req.json();

  if (!idToken) {
    return new NextResponse(JSON.stringify({ error: 'ID token missing' }), { status: 400 });
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);

    const expiresIn = 60 * 60 * 24 * 7 * 1000;

    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    const response = new NextResponse(JSON.stringify({ message: 'Session cookie created' }));
    response.headers.set(
      'Set-Cookie',
      `session=${sessionCookie}; Path=/; HttpOnly; Max-Age=${expiresIn / 1000}; SameSite=Strict; ${
        process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      }`
    );

    return response;
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Failed to create session cookie' }), { status: 401 });
  }
}
