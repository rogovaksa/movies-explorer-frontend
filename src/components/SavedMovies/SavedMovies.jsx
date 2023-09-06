import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies(props) {
    return (
      <main>
        <section className='saved-movies'>
          <SearchForm page={'saved-movies'} />
          <MoviesCardList page={'saved-movies'} saved={true}/>
        </section>
      </main>
    )
}

export default SavedMovies;