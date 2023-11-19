import React, { FC } from 'react';
import style from './Button.module.scss';
import { IButtonProps } from './Button.types';

export const Button: FC<IButtonProps> = ({ type, children }) => {
  return <button className={style[type]}>{children}</button>;
};
