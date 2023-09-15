import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useResize from "../../utils/useResize";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  MAX_MOVIES_DESKTOP,
  MAX_MOVIES_TAB,
  MAX_MOVIES_MOBILE,
  MAX_MOVIES_STEP_DESKTOP,
  MAX_MOVIES_STEP_DEFAULT,
  WIDTH_DESKTOP,
  WIDTH_MOBILE
} from "../../constants/constants";

function MoviesCardList({ movies, errorMessage, setMovies }) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [step, setStep] = useState(0);
  const location = useLocation();

  const width = useResize(); //при любом изменении ширины экрана

  function showMoreMovies() {
    setMaxMovies(maxMovies + step);
  }

  const setCardsTemplate = () => {
    // const width = window.innerWidth;
    if (location.pathname === "/saved-movies") {
      setMaxMovies(movies.length);
      return;
    }
    if (width >= WIDTH_DESKTOP) {
      setMaxMovies(MAX_MOVIES_DESKTOP);
      setStep(MAX_MOVIES_STEP_DESKTOP);
    }
    if (width > WIDTH_MOBILE && width < WIDTH_DESKTOP) {
      setMaxMovies(MAX_MOVIES_TAB);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    }
    if (width <= WIDTH_MOBILE) {
      setMaxMovies(MAX_MOVIES_MOBILE);
      setStep(MAX_MOVIES_STEP_DEFAULT);
    }
  };

  useEffect(() => {
    setCardsTemplate();
  }, [movies, width]);

  const deleteMovie = (id) => {
	const newMovies = movies.filter((movie) => movie._id !== id);
	setMovies(newMovies);
  }
    return (
        <section className='movies-cards'>
          {errorMessage ? (
        <span className="movies__error">{errorMessage}</span>
      ) : (
            <ul className='movies-cards__list'>
              {movies.map((movie, index) => {
                if (index < maxMovies) {
                  return (
                    <MoviesCard key={movie.id || movie.movieId} movie={movie} deleteMovie={deleteMovie} />
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
        </section>
    )
}

export default MoviesCardList;