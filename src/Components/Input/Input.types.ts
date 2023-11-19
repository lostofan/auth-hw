import { ReactNode } from 'react';

export interface IInputProps {
  type: 'email' | 'text' | 'password' | 'checkbox';
  label: string;
  placeholder: string;
  children: ReactNode;
  input: IUser;
  setInput: React.Dispatch<React.SetStateAction<IUser>>;
}
export interface IUser {
  email: string;
  password: string;
}
