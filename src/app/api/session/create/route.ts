import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { idToken } = await req.json();

  if (!idToken) {
    return new Response(JSON.stringify({ error: 'No ID token provided' }), { status: 400 });
  }

  // Set cookie directly without using serialize
  const response = new NextResponse(JSON.stringify({ message: 'Cookie set successfully' }));
  
  response.headers.set('Set-Cookie', `session=${idToken}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`);

  return response;
}
