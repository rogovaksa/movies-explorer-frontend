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
    <main>
      <section className='login'>
        <Form
          name='signin'
          title='Рады видеть!'
          btnName='Войти'
          onSubmit={handleSubmit}
          textError={textError}
          clearTextError={clearTextError}
        />
      </section>
    </main>
  );
});

export default Login;
