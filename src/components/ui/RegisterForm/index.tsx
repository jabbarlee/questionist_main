"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signUpWithEmailPassword } from '@/actions/firebase/signUpWithEmailPassword';
import { loginWithEmailPassword } from '@/actions/firebase/signInWithEmailPassword';
import styles from './index.module.css';
import LoginButton from '../LoginButton';

const Register = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUpWithEmailPassword(email, password);
      alert('User registered successfully!');
      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed!');
    }
  };

  const handleLogin = async () => {
    try {
      await loginWithEmailPassword(email, password);
      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      /><br/>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSignUp}>Register</button>
        <button className={styles.button} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;
