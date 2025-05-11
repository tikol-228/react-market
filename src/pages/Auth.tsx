import { useState } from 'react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';
import auth from '../assets/auth.svg';

interface FormData {
  name?: string;
  username: string;
  email: string;
  pass: string;
  checkbox?: boolean;
}

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    localStorage.setItem('username', data.username)
    console.log(JSON.stringify(data));
    if (isSignIn) {
      navigate('/HomePage1');
    } else {
      // Handle sign-up logic
    }
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

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
            <a href="#" onClick={(e) => { e.preventDefault(); toggleAuthMode(); }}>
              {isSignIn ? ' Sign Up' : ' Sign In'}
            </a>
          </p>
          {!isSignIn && (
            <input 
              {...register('name')}
              className={styles.nameInput}
              placeholder="Name"
            />
          )}
          <input 
            {...register('username', { required: 'Username is required' })}
            className={styles.userInput}
            placeholder="Username"
          />
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}
          <input
            {...register('email', { required: 'Email is required' })}
            className={styles.emailInput}
            placeholder="Email"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          <input
            {...register('pass', { required: 'Password is required' })}
            className={styles.passInput}
            placeholder="Password"
            type="password"
          />
          {errors.pass && <p className={styles.error}>{errors.pass.message}</p>}
          <input
            {...register('checkbox')}
            className={styles.checkInput}
            type="checkbox"
            value="true"
          />
          <p>
            I agree with <Link to="#">Privacy Policy</Link> and <Link to="#">Terms of Use</Link>
          </p>
          <Button type="submit" className={styles.authBtn}>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Auth;