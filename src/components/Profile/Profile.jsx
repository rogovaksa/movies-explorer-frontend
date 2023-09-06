import React from 'react';
import { useForm } from '../../utils/useForm';
import Preloader from '../Preloader/Preloader';
import './Profile.css';

function Profile({ signOut, isLoading }) {

  const currentUser = {
    'name': 'Name',
    'email': 'email@yandex.ru'
  };
  const form = useForm({ name: currentUser.name, email: currentUser.email });

  function handleSubmit(e) {
    e.preventDefault();
  }
  if (isLoading) {
    return <Preloader />
  } else {
    return (
      <main className='profile'>
        <section className='profile__container'>
          <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
          <form className='profile__form' onSubmit={handleSubmit}>
            <label className='profile__field'>
              <span className='profile__name'>Имя</span>
              <input
                className='profile__input'
                name='name'
                type='text'
                onChange={form.handleChange}
                value={form.values.name || ''}
                minLength='2'
                maxLength='40'
                required
              />
            </label>
            <span className="profile__error">{`${
              form.errors.name ? form.errors.name : ''
            }`}</span>
            <label className='profile__field'>
              <span className='profile__name'>E-mail</span>
              <input
                className='profile__input'
                name='email'
                type='email'
                onChange={form.handleChange}
                value={form.values.email || ''}
                minLength='2'
                maxLength='40'
                required
              />
            </label>
            <span className="profile__error">{`${
              form.errors.email ? form.errors.email : ''
            }`}</span>
            {/* Изменение состояния кнопки "Редактировать" будет реализовано на следующем этапе при написании функционала приложения */}
            <button
              type='submit'
              className={`profile__button ${
                !form.isValid && 'profile__button_disabled'
              }`}
              disabled={!form.isValid}
            >
              Редактировать
            </button>
          </form>
          <button type='button' className='profile__signout' onClick={signOut}>
            Выйти из аккаунта
          </button>
        </section>
      </main>
    );
  }
}

export default Profile;
