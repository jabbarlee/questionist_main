import { signInWithPopup, getIdToken, AuthProvider } from 'firebase/auth';
import { auth } from '@/config/firebaseClient'; // Make sure to point to your Firebase client config

export const firebaseLogin = async (provider: AuthProvider) => {

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Get the ID token from Firebase
    const idToken = await getIdToken(user);

    // Send the ID token to the server for session creation
    const res = await fetch('/api/auth/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (res.ok) {
      return res.ok;
    } else {
      console.error('Server-side authentication failed');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
