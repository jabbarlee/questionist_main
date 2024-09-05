import React from 'react'
import LoginButton from '../../ui/LoginButton'
import RegisterForm from '../../ui/RegisterForm'
import { Typography } from '@mui/material'
import Link from 'next/link'
import styles from './index.module.css'

function Signup() {
  return (
    <div className={styles.container}>
      <Typography variant="h5">Create an account</Typography>
      <RegisterForm/>
      <LoginButton provider='Google' buttonText='Continue with Google'/>
      <LoginButton provider='Apple' buttonText='Continue with Apple'/>
      <Typography variant="body1">Already have an account? <Link href="/signin">Sign in</Link></Typography>
    </div>
  )
}

export default Signup