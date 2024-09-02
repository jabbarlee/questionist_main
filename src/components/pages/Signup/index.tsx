import React from 'react'
import LoginButton from '../../ui/LoginButton'
import RegisterForm from '../../ui/RegisterForm'
import { Typography } from '@mui/material'
import styles from './index.module.css'

function Signup() {
  return (
    <div className={styles.container}>
      <Typography variant="h5">Questionist</Typography>
      <RegisterForm/>
      <LoginButton provider='Google' buttonText='Continue with Google'/>
      <LoginButton provider='Apple' buttonText='Continue with Apple'/>
    </div>
  )
}

export default Signup