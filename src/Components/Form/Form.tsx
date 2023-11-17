import React from 'react';
import style from './Form.module.scss';
import { Input } from '../Input';

export const Form = () => {
  return (
    <form className={style.root}>
      <Input label="email" type="email" placeholder={'example@domain.com'}>
        Введите Email
      </Input>
      <Input label="password" type="password" placeholder={'*****'}>
        Введите пароль
      </Input>
    </form>
  );
};
