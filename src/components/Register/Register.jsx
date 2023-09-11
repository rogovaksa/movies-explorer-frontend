import React, { memo } from 'react';
import './Register.css';
import Form from '../Form/Form';

const Register = memo(({ authRegister, textError, setTextError }) => {

  function handleSubmit(e, { name, email, password }) {
    e.preventDefault();
    authRegister(name, email, password);
  }

  return (
    <main>
      <section className='register'>
        <Form
          name='sign-up'
          title='Добро пожаловать!'
          btnName='Зарегистрироваться'
          onSubmit={handleSubmit}
          textError={textError}
          setTextError={setTextError}
        />
      </section>
    </main>
  );
});

export default Register;
