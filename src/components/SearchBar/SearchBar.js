import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <input className="search-bar" 
    onChange={props.onSearchChange}
    type="search" 
    placeholder={props.placeholder} />
);

export default SearchBar;