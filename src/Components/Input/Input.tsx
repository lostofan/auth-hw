import React, { FC } from 'react';
import { IInputProps, IUser } from './Input.types';
import style from './Input.module.scss';

export const Input: FC<IInputProps> = ({ label, type, placeholder, input, setInput, children }) => {
  return (
    <label htmlFor={label} className={type !== 'checkbox' ? style.root : style.checkbox}>
      <div className={style.title}>{children}</div>
      <input
        className={style.input}
        type={type}
        id={label}
        placeholder={placeholder}
        value={input[type as keyof IUser]}
        autoComplete="off"
        onChange={(e) => setInput({ ...input, [type as keyof IUser]: e.target.value })}
      />
    </label>
  );
};
