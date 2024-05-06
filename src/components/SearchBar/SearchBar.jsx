import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

export function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return alert('Input is empty!');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.SearchBar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          type="text"
          className={styles.SearchFormInput}
          placeholder="Search images"
          autoFocus
          autoComplete="off"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className={styles.SearchFormButton}></button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
