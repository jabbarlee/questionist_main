import { auth } from '@/config/firebaseAdmin';
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const sessionCookie = cookies().get('_session')?.value;

  if (!sessionCookie) {
    return <div>Please log in to access the dashboard.</div>;
  }

  try {
    // Verify the session cookie
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    console.log('Decoded claims:', decodedClaims);
    // Render protected content
    return <div>Welcome, {decodedClaims.name}! This is your dashboard.</div>;
  } catch (error) {
    return <div>Invalid session. Please log in again.</div>;
  }
}
