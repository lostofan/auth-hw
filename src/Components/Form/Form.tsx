import React from 'react';
import style from './Form.module.scss';
import { Input } from '../Input';
import { Button } from '../Button';
import { useAuth } from '../../Hooks/useAuth';
import { Checkbox } from '../Checkbox';

export const Form = () => {
  const { user, setUser, error, handleSubmit } = useAuth();
  return (
    <form className={style.root} onSubmit={(e) => handleSubmit(e)} noValidate>
      <p className={style.title}>Выполнить вход</p>
      {error ? <span className={style.error}>{error}</span> : false}
      <div className={style.inputs}>
        <Input
          label="email"
          type="email"
          placeholder={'example@domain.com'}
          input={user}
          setInput={setUser}>
          Введите Email
        </Input>
        <Input label="password" type="password" placeholder="*****" input={user} setInput={setUser}>
          Введите пароль
        </Input>
        <Checkbox label="rememberPass">Запомнить меня</Checkbox>
      </div>
      <Button type="login">Войти</Button>
    </form>
  );
};
