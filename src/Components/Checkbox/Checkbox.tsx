import React, { FC } from 'react';
import { ICheckboxProps } from './Checkbox.types';
import style from './Checkbox.module.scss';

export const Checkbox: FC<ICheckboxProps> = ({ label, children }) => {
  return (
    <label htmlFor={label} className={style.root}>
      <input className={style.checkbox} id={label} type="checkbox" />
      <div className={style.title}>{children}</div>
    </label>
  );
};
