import React from 'react';
import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main>
      <section className='movies-section'>
        <div className='movies-section__container'>
          <SearchForm
            page={'movies'}
          />
          <MoviesCardList
            page={'movies'}
          />
        </div>
      </section>
    </main>
  );
}

export default Movies;
