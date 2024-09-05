import React from 'react'
import LoginButton from '../../ui/LoginButton'
import RegisterForm from '../../ui/RegisterForm'
import { Typography } from '@mui/material'
import SigninForm from '../../ui/SigninForm'
import styles from './index.module.css'

function index() {
  return (
    <div className={styles.container}>
        <Typography variant="h5">Sign in</Typography>
        <SigninForm/>
        <LoginButton provider='Google' buttonText='Continue with Google'/>
        <LoginButton provider='Apple' buttonText='Continue with Apple'/>
    </div>
  )
}

export default index