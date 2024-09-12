"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { GoogleAuthProvider, OAuthProvider, AuthProvider } from 'firebase/auth';
import styles from './index.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { loginWithGoogle } from '@/actions/firebase/loginWithGoogle';

const LoginButton = ({ buttonText } : { buttonText: string }) => {
  const router = useRouter();

  return (
    <button 
      className={styles.button} 
      onClick={() => loginWithGoogle({ router })}
    >
      {/* {getIcon()} */}
      {buttonText}
    </button>
  );
};

export default LoginButton;
