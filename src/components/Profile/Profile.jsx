import React, { useContext, useEffect, useState } from 'react';
import { useForm } from '../../utils/useForm';
// import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { PATTERN_EMAIL } from '../../constants/constants';
import './Profile.css';

function Profile({ handleLogout, editProfile, isEditError, isEditDone, isLoadingEditProfile }) {

  const currentUser = useContext(CurrentUserContext);
  const [disabled, setDisabled] = useState(true);

  const form = useForm();
  const { email, name } = form.values;

  useEffect(() => {
    form.setValues({
      email: currentUser.email,
      name: currentUser.name,
    });
  }, [currentUser]);

  const submitEditProfile = (event) => {
    event.preventDefault();
    editProfile(name, email);
  };

  useEffect(() => {
    const { name, email } = form.values;
    if (
      form.isValid &&
      (currentUser.name !== name || currentUser.email !== email)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form.values, currentUser]);

    return (
      <main className='profile'>
        <section className='profile__container'>
          <h2 className='profile__title'>Привет, {currentUser && currentUser.name}!</h2>
          <form className='profile__form' onSubmit={submitEditProfile}>
            <label className='profile__field'>
              <span className='profile__name'>Имя</span>
              <input
                className='profile__input'
                name='name'
                type='text'
                onChange={form.handleChange}
                value={name || ""}
                minLength='2'
                maxLength='40'
                required
                disabled={isLoadingEditProfile}
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
                value={email || ""}
                minLength='2'
                maxLength='40'
                pattern={PATTERN_EMAIL}
                required
                disabled={isLoadingEditProfile}
              />
            </label>
            <span className="profile__error">{`${
              form.errors.email ? form.errors.email : ''
            }`}</span>
            {isEditError && (
              <p className="profile__error">Что-то пошло не так...</p>
            )}
            {isEditDone && (
              <p className="profile__success">Ваш профиль успешно обновлен</p>
            )}
            <button
              type='submit'
              className={`profile__button ${
                disabled && 'profile__button_disabled'
              }`}
              disabled={disabled}
            >
              Редактировать
            </button>
          </form>
          <button type='button' className='profile__signout' onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </section>
      </main>
    );
  }


export default Profile;
