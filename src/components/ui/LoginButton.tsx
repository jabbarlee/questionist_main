'use client';

import { signInWithPopup, GoogleAuthProvider, getIdToken } from 'firebase/auth';
import { auth } from '@/config/firebaseClient';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    console.log('Provider:', provider);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log('User:', user);
      
      // Get the ID token from Firebase
      const idToken = await getIdToken(user);
      console.log('ID token:', idToken);

      // Send the ID token to the server for session creation
      const res = await fetch('/api/auth/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      console.log('Login response:', res);

      if (res.ok) {
        router.push('/dashboard'); // Redirect to a protected route after login
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login with Google
    </button>
  );
}
