import React, { memo } from 'react';
import './Register.css';
import Form from '../Form/Form';

const Register = memo(({ textError, clearTextError }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='register'>
      <Form
        name='sign-up'
        title='Добро пожаловать!'
        btnName='Зарегистрироваться'
        onSubmit={handleSubmit}
        textError={textError}
        clearTextError={clearTextError}
      />
    </section>
  );
});

export default Register;
