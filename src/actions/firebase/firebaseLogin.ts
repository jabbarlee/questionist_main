import { signInWithPopup, getIdToken, AuthProvider } from 'firebase/auth';
import { auth } from '@/config/firebaseClient';

export const firebaseLogin = async (provider: AuthProvider) => {

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const idToken = await getIdToken(user);

    const res = await fetch('/api/auth/session/create', {
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
