"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { GoogleAuthProvider, OAuthProvider, AuthProvider } from 'firebase/auth';
import styles from './index.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

interface LoginButtonProps {
  provider: 'Google' | 'Apple'; // Ensure the provider is always either 'Google' or 'Apple'
  buttonText: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ provider, buttonText }) => {
  const router = useRouter();


  return (
    <button 
      className={styles.button} 
      // onClick={onLoginClick}
    >
      {/* {getIcon()} */}
      {buttonText}
    </button>
  );
};

export default LoginButton;
