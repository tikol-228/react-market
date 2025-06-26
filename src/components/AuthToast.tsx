import React, { useEffect } from 'react';

interface AuthToastProps {
  message: string;
  onClose: () => void;
  duration?: number; // milliseconds
}

const AuthToast: React.FC<AuthToastProps> = ({ message, onClose, duration = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#222',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      zIndex: 2000,
      fontSize: '1rem'
    }}>
      {message}
    </div>
  );
};

export default AuthToast;