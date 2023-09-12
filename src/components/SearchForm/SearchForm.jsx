import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleSearch, queryKey, shorstKey }) {

  const [inputValue, setInputValue] = useState("");
  const [shorts, setShorts] = useState(false);

  const [placeholderContent, setPlaceholderContent] = useState("Movie");
  const [error, setError] = useState(false);

  const handleInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleCheckbox = () => {
    setShorts(!shorts);
    handleSearch(inputValue, !shorts);
    localStorage.setItem(shorstKey, !shorts);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!inputValue) {
      setError(true);
      evt.target.elements["search-query"].focus();
      return;
    }
    setError(false);
    setPlaceholderContent("Movie");
    localStorage.setItem(queryKey, inputValue);
    handleSearch(inputValue, shorts);
  };

  useEffect(() => {
    const savedInputValue = localStorage.getItem(queryKey);
    const savedShorts = JSON.parse(localStorage.getItem(shorstKey));
    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
    if (savedShorts) {
      setShorts(savedShorts);
    }
    if (savedInputValue || savedShorts === true) {
      handleSearch(savedInputValue, savedShorts);
    }
  }, []);

  return (
    <section className='search'>
      <form
        className='search__form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <fieldset className='search__field'>
          <input
            className='search__input'
            type='text'
            id="search-query"
            name="search-query"
            placeholder={placeholderContent}
            required
            onChange={handleInput}
            value={inputValue}
          />
          <button className='search__submit' type='submit'></button>
        </fieldset>
        <div>
          <span
            className={`search__input-error ${
              !error ? "search__input-error_hidden" : ""
            }`}
          >
            Нужно ввести ключевое слово
          </span>
        </div>
      </form>
      <div>
        <FilterCheckbox
          value={shorts}
          onChange={handleCheckbox}
        />
      </div>
    </section>
  );
}

export default SearchForm;