"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleSignUp } from '@/actions/handleSignup';

import styles from './index.module.css';

const Register = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.inputFullname}
        />
        <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.inputFullname}
        />
      </div><br/>
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
        <button className={styles.button} onClick={() => handleSignUp({email, password, router})}>Sign up</button>
      </div>
    </div>
  );
};

export default Register;
