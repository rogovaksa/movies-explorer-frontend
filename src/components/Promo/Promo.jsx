import React from 'react';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  const scroll = () => {
    const section = document.getElementById('about-project');
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text-content'>
          <h1 className='promo__title'>
            Учебный проект студента факультета
              Веб&#8209;разработки.
          </h1>
          <h3 className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h3>
          <button className='promo__button' onClick={scroll}>Узнать больше</button>
        </div>
        <img src={landingLogo} alt='Фоновый рисунок' className='promo__image' />
      </div>
    </section>
  );
}

export default Promo;
