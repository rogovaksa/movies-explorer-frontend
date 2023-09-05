import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/rogovaksa/how-to-learn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__subtitle'>Статичный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/rogovaksa/russian-travel'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__subtitle'>Адаптивный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/rogovaksa/react-mesto-api-full-gha'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='portfolio__subtitle'>Одностраничное приложение</p>
            <img className='portfolio__arrow' src={arrow} alt='arrow' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
