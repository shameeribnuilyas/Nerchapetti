import React from 'react';
import classes from '../css/search.module.css';

const SearchBox = () => {
  return (
    <form>
      <input className={classes.searchBox} type="text" name="search" placeholder="Search" />
    </form>
  );
}

export default SearchBox;