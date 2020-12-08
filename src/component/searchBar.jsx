import React, { Component } from 'react';
import styles from './searchBar.module.css'

class SearchBar extends Component {
  render() {
    return (
      <header>
        <img src="./public/images/logo.png" alt="logo" className={styles.logo}/>
        <input type="text" className={styles.search}/>
        <button className="searchButton" src="./public/images/search.png"></button>
      </header>
    );
  }
}

export default SearchBar;