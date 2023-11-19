import { useState } from 'react';
import { auth } from '../Utils/api';

export const useAuth = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await auth(user);
    } catch (e) {
      if (e instanceof Error) {
        setUser({ email: '', password: '' });
        setError(e.message);
      }
    }
  };
  return { user, setUser, error, handleSubmit };
};
