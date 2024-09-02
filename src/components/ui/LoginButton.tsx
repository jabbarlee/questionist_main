"use client";

import { useRouter } from 'next/navigation';
import { GoogleAuthProvider } from 'firebase/auth';
import { firebaseLogin } from '@/actions/firebaseLogin'; // Adjust the path as needed

const LoginButton = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const onLoginClick = async () => {
    try {
      const success = await firebaseLogin(provider); // Call the utility function
      if (success) {
        router.push('/dashboard'); // Redirect to the dashboard
        router.refresh();
      } else {
        console.error('Server-side authentication failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return <button onClick={onLoginClick}>Login with Google</button>;
};

export default LoginButton;
