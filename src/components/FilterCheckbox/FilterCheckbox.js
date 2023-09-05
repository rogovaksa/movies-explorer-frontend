import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortFilms, setIsShortFilms }) {
  return (
    <div className='filter'>
      <label className='filter__checkbox'>
        <input
          type='checkbox'
          className='filter__input'
          onClick={() => {
            setIsShortFilms(!isShortFilms);
          }}
        />
        <span className='filter__slider' />
      </label>
      <p className='filter__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
