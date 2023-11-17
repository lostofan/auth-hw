import { ReactNode } from 'react';

export interface IInputProps {
  type: 'email' | 'text' | 'password';
  label: string;
  placeholder: string;
  children: ReactNode;
}
