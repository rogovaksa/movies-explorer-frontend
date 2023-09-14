import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  MAX_MOVIES_1280,
  MAX_MOVIES_768,
  MAX_MOVIES_DEFAULT,
  MAX_MOVIES_STEP_1280,
  MAX_MOVIES_STEP_1000,
  MAX_MOVIES_STEP_DEFAULT,
} from "../../constants/constants";
import { WIDTH_desktop, WIDTH_pad, WIDTH_mobile } from '../../constants/constants';


function MoviesCardList({ movies, errorMessage }) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [step, setStep] = useState(0);
  const location = useLocation();

  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  const setCardsTemplate = () => {
    const width = window.innerWidth;
    if (location.pathname === "/saved-movies") {
      setMaxMovies(movies.length);
      return;
    }
    if (width <= WIDTH_mobile) {
      setMaxMovies(MAX_MOVIES_DEFAULT);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    } else if (width <= WIDTH_pad) {
      setMaxMovies(MAX_MOVIES_768);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    } else if (width <= WIDTH_desktop) {
      setMaxMovies(MAX_MOVIES_1280);
      setStep(MAX_MOVIES_STEP_1000);
    } else {
      setMaxMovies(MAX_MOVIES_1280);
      setStep(MAX_MOVIES_STEP_1280);
    }
  };

  useEffect(() => {
    setCardsTemplate();
  }, [movies]);

    return (
        <section className='movies-cards'>
          {errorMessage ? (
        <span className="movies__error">{errorMessage}</span>
      ) : (
            <ul className='movies-cards__list'>
              {movies.map((movie, index) => {
                if (index < maxMovies) {
                  return (
                    <MoviesCard key={movie.id || movie.movieId} movie={movie} />
                  );
                }
                return null;
              })}
            </ul>
            )}
            {movies.length > maxMovies && location.pathname !== "/saved-movies" && (
              <button className="movies-cards__more-button" onClick={showMoreMovies}>
                Еще
              </button>
            )}
            {/* <button className={props.saved ? 'movies-cards__more-button movies-cards__more-button_invisible' : 'movies-cards__more-button'}>Еще</button> */}
        </section>
    )
}

export default MoviesCardList;