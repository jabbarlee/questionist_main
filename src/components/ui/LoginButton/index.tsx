"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { GoogleAuthProvider, OAuthProvider, AuthProvider } from 'firebase/auth';
import { firebaseLogin } from '@/actions/firebase/firebaseLogin';
import styles from './index.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

interface LoginButtonProps {
  provider: 'Google' | 'Apple'; // Ensure the provider is always either 'Google' or 'Apple'
  buttonText: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider, buttonText }) => {
  const router = useRouter();

  // Function to get the correct auth provider
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

  // Function to get the corresponding icon based on the provider
  const getIcon = () => {
    switch (provider) {
      case 'Google':
        return <GoogleIcon style={{ marginRight: '8px' }} />;
      case 'Apple':
        return <AppleIcon style={{ marginRight: '8px' }} />;
      default:
        return null;
    }
  };

  const onLoginClick = async () => {
    const authProvider = getProvider();

    try {
      const success = await firebaseLogin(authProvider);
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
    <button 
      className={styles.button} 
      onClick={onLoginClick}
    >
      {getIcon()}
      {buttonText}
    </button>
  );
};

export default LoginButton;
