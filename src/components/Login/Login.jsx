import React, { memo } from 'react';
import Form from '../Form/Form';
import './Login.css';

const Login = memo(({ authLogin, textError, setTextError }) => {
  function handleSubmit(e, { email, password }) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    authLogin(email, password);
  }
  return (
    <main>
      <section className='login'>
        <Form
          name='sign-in'
          title='Рады видеть!'
          btnName='Войти'
          onSubmit={handleSubmit}
          textError={textError}
          setTextError={setTextError}
        />
      </section>
    </main>
  );
});

export default Login;
