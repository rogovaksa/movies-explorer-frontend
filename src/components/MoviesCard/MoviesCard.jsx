import React from 'react';
import './MoviesCard.css';
import poster from '../../images/movies/movie-1.jpg';

function MoviesCard(props) {

  const [isSaved, setIsSaved] = React.useState(false);

  function handleSaveButtonCLick() {
    setIsSaved(!isSaved);
  }
  return (
      <li className='movies'>
        <div className='movies__list-description'>
          <div className='movies__list-name'>
            <p className='movies__list-title'>33 слова о дизайне</p>
            <p className='movies__list-duration'>1ч 47м</p>
          </div>
          {props.saved ?
          <button className={`movies__list-delete-button`}></button> :
          <button className={`movies__list-save-button ${isSaved ? 'movies__list-save-button_clicked' : ''}`} onClick={handleSaveButtonCLick}></button>}
        </div>

        <img src={poster} alt='Обложка фильма' className='movies__list-poster'/>

      </li>
      )

}

export default MoviesCard;