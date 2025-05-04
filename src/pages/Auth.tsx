import React, { use } from 'react'
import Input from '../homePage1/Input'
import Button from '../homePage1/Button'
import Link from '../homePage1/Link'
import auth from '../assets/auth.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.css'

const Auth = () => {

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm()
  const onSubmit = (d: any) => {
    console.log(JSON.stringify(d)) 
  }

  // console.log(register,1)

  const handleSingInClick = () => {
    navigate('/HomePage1')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
        <div className={styles.authImg}>
          <img src={auth}/>
        </div>
        <div className={styles.authFields}>
          <h1 className={styles.authText}>Sing Up</h1>
          <input 
            {...register('name')}
            className={styles.nameInput}
          />

          <input 
            {...register('username')}
            className={styles.userInput}
          />

        <input
          {...register('email', {})}
          className={styles.emailInput}
        />
        <input
          {...register('pass', {})}
          className={styles.passInput}
        />

        <input
          {...register('checkbox')}
          className={styles.checkInput}
          type='checkbox'
        />

        <p>I agree with<Link href='#'>Privacy Policy</Link>and<Link href='#'>Terms of Use</Link></p>

        <Button type='submit' onClick={handleSingInClick} className={styles.authBtn}>Sing In</Button>
      </div>
      </form>
    </>
  )
}

export default Auth