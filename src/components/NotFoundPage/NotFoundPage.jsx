import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <span className='not-found__button' onClick={() => navigate(-1)}>
          Назад
        </span>
      </div>
    </section>
  );
}

export default NotFoundPage;
