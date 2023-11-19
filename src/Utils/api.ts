export const auth = (data: { email: string; password: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'test@domain.com' && data.password === 'test') {
        resolve({ status: 200 });
        alert('Вход выполнен успешно');
      } else {
        const error = new Error('Неверная почта или пароль!');
        reject(error);
      }
    }, 1000);
  });
};
