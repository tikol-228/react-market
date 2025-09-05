import React from 'react'
import Img from './Img'
import Button from './Button'
import Link from './Link'

const AuthBtnGoogle = () => (
  <button
    onClick={() => window.location.href = "http://localhost:8000/auth/google"}
    className="h-12 bg-white border border-gray-300 rounded-md flex items-center justify-center gap-2 mt-4 hover:bg-gray-50 transition"
    type="button"
  >
    <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
    Sign in with Google
  </button>
);

export default AuthBtnGoogle;