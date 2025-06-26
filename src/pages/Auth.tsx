import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from '../components/Button';
import AuthToast from '../components/AuthToast';
import auth from '../assets/auth.svg';

interface FormData {
  name?: string;
  username: string;
  email: string;
  pass: string;
  checkbox?: boolean;
}

interface UserData {
  id: string;
  username: string;
  email: string;
  password: string;
  isAuth: boolean;
  isAgreed: boolean;
  name: string;
}

const generateUserId = () => Date.now().toString() + Math.random().toString(36).slice(2);

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  // Получить всех пользователей из localStorage
  const getUsers = (): UserData[] => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  // Сохранить пользователей в localStorage
  const saveUsers = (users: UserData[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  // Регистрация
  const handleRegister = (data: FormData) => {
    const users = getUsers();
    // Проверка на уникальность username и email
    if (users.find(u => u.username === data.username)) {
      setToastMessage("Username already exists");
      setShowToast(true);
      return;
    }
    if (users.find(u => u.email === data.email)) {
      setToastMessage("Email already exists");
      setShowToast(true);
      return;
    }
    const newUser: UserData = {
      id: generateUserId(),
      username: data.username,
      email: data.email,
      password: data.pass,
      isAuth: false,
      isAgreed: !!data.checkbox,
      name: data.name ?? "",
    };
    users.push(newUser);
    saveUsers(users);
    // Сохраняем userId и username
    setToastMessage("Registration successful!");
    setShowToast(true);
    // setTimeout(() => {
    //   navigate("/home");
    // }, 1000);
  };

  // Вход
  const handleLogin = (data: FormData) => {
    const users = getUsers();
    const user = users.find(
      u =>
        (u.username === data.username || u.email === data.email) &&
        u.password === data.pass
    );
    if (!user) {
      setToastMessage("Invalid username/email or password");
      setShowToast(true);
      return;
    }

    localStorage.setItem("activeUser", JSON.stringify({...user, isAuth: true})); 
    setToastMessage("Login successful!");
    setShowToast(true);
    navigate("/home");
  };

  const onSubmit = (data: FormData) => {
    if (isSignIn) {
      handleLogin(data);
    } else {
      handleRegister(data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-screen flex flex-col lg:flex-row">
        {/* Left image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">
          <img src={auth} alt="Auth" className="w-full h-auto lg:h-full object-cover" />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 bg-white/90">
          <h1 className="text-3xl font-bold text-center font-poppins mb-4">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            {isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSignIn(!isSignIn);
              }}
              className="text-black font-medium"
            >
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </a>
          </p>

          {!isSignIn && (
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Name"
              className="mb-4 h-12 px-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-black"
            />
          )}

          <input
            {...register('username', { required: 'Username is required' })}
            placeholder="Username"
            className="mb-2 h-12 px-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-black"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mb-2">{errors.username.message}</p>
          )}

          <input
            {...register('email', { required: !isSignIn ? 'Email is required' : false })}
            placeholder="Email"
            className="mb-2 h-12 px-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-black"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mb-2">{errors.email.message}</p>
          )}

          <input
            {...register('pass', { required: 'Password is required' })}
            type="password"
            placeholder="Password"
            className="mb-2 h-12 px-4 border border-gray-300 rounded-md text-base placeholder-gray-400 focus:outline-none focus:border-black"
          />
          {errors.pass && (
            <p className="text-sm text-red-500 mb-2">{errors.pass.message}</p>
          )}

          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              {...register('checkbox')}
              className="w-5 h-5 accent-black"
            />
            <span className="text-sm text-gray-500">
              I agree with{' '}
              <a href="#" className="text-black font-medium">Privacy Policy</a> and{' '}
              <a href="#" className="text-black font-medium">Terms of Use</a>
            </span>
          </div>

          <Button type="submit" className="h-12 bg-black text-white text-base font-semibold rounded-md hover:bg-black/80 transition">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </div>
      </form>

      {showToast && (
        <AuthToast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
};

export default Auth;