import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>
        О проекте
      </h2>
      <ul className='about-project__text'>
        <li className='about-project__text-block'>
          <h3 className='about-project__text-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text-content'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__text-block'>
          <h3 className='about-project__text-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text-content about-project__text-content_last'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about-project__time'>
        <li className='about-project__time-item'>
          <p className='about-project__time-title about-project__time-title_backend'>
            1 неделя
          </p>
          <p className='about-project__time-subtitle'>Back-end</p>
        </li>
        <li className='about-project__time-item'>
          <p className='about-project__time-title'>4 недели</p>
          <p className='about-project__time-subtitle'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
