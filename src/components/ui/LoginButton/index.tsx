"use client";

import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, OAuthProvider, AuthProvider } from 'firebase/auth';
import { firebaseLogin } from '@/actions/firebase/firebaseLogin';
import styles from './index.module.css';

interface LoginButtonProps {
  provider?: 'Google' | 'Apple';
  buttonText: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider, buttonText }) => {
  const router = useRouter();

  const getProvider = (): AuthProvider => {
    switch (provider) {
      case 'Google':
        return new GoogleAuthProvider();
      case 'Apple':
        return new OAuthProvider('apple.com');
      default:
        throw new Error('Unsupported provider');
    }
  };

  const onLoginClick = async () => {
    const provider = getProvider();

    try {
      const success = await firebaseLogin(provider);
      if (success) {
        router.push('/dashboard');
        router.refresh();
      } else {
        console.error('Server-side authentication failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <button 
        className={styles.button} 
        onClick={onLoginClick}
      >
        {buttonText}
      </button>
    </>
  );
};

export default LoginButton;
