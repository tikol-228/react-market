import React, { useState } from 'react'
import Input from '../homePage1/Input'
import Button from '../homePage1/Button'
import Link from '../homePage1/Link'
import auth from '../assets/auth.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.css'

interface FormData {
  name?: string;
  username: string;
  email: string;
  pass: string;
  checkbox?: boolean;
}

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Состояние для переключения между входом и регистрацией
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data))

    if (isSignIn) {
      navigate('/HomePage1')
    } else {
      
    }
  }

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn); // Переключение режима
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
        <div className={styles.authImg}>
          <img src={auth} alt="Auth" />
        </div>
        <div className={styles.authFields}>
          <h1 className={styles.authText}>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          <p>
            {isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}
            <Link href="#" onClick={toggleAuthMode}>
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </Link>
          </p>
          <input 
            {...register('name')}
            className={styles.nameInput}
            placeholder="Name"
            style={{ display: isSignIn ? 'none' : 'block' }}
          />
          <input 
            {...register('username')}
            className={styles.userInput}
            placeholder="Username"
          />
          <input
            {...register('email')}
            className={styles.emailInput}
            placeholder="Email"
          />
          <input
            {...register('pass')}
            className={styles.passInput}
            placeholder="Password"
            type="password"
          />
          <input
            {...register('checkbox')}
            className={styles.checkInput}
            type='checkbox'
          />
          <p>
            I agree with<Link href='#'> Privacy Policy</Link> and<Link href='#'> Terms of Use</Link>
          </p>
          <Button type='submit' className={styles.authBtn}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </form>
    </>
  )
}

export default Auth