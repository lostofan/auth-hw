import React, { FC, useState } from 'react';
import { IInputProps } from './Input.types';
import style from './Input.module.scss';

export const Input: FC<IInputProps> = ({ label, type, placeholder, children }) => {
  const [input, setInput] = useState('');
  return (
    <label htmlFor={label} className={style.root}>
      <div className={style.title}>{children}</div>

      <input
        className={style.input}
        type={type}
        id={label}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </label>
  );
};
