import React, { memo } from 'react';
import Form from '../Form/Form';
import './Login.css';

const Login = memo(({ textError, clearTextError }) => {
  function handleSubmit(e, { email, password }) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
  }
  return (
    <section className='login__page'>
      <Form
        name='signin'
        title='Рады видеть!'
        btnName='Войти'
        onSubmit={handleSubmit}
        textError={textError}
        clearTextError={clearTextError}
      />
    </section>
  );
});

export default Login;
