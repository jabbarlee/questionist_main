"use client";

import React, { useState} from 'react'
import { useRouter } from 'next/navigation';
// import { loginWithEmailPassword } from '@/actions/firebase/signInWithEmailPassword';
import styles from './index.module.css';

function page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // await loginWithEmailPassword(email, password);
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
          <button className={styles.button} onClick={handleLogin}>Log in</button>
        </div>
    </div>
  )
}

export default page