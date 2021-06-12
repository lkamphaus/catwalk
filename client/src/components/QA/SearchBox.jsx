import React, { useState, useEffect } from "react";
import style from "./QuestionList.module.css";
import { HiSearch } from 'react-icons/hi';

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    let term = event.target.value;

    setSearchTerm(term);

    if (term.length) {
      props.searchQuestionList(term)
    }

  }

  return (
    <div>
      <div className={style.searchBoxSection}>
        <input className={style.searchBar}
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={handleSearch}>
        </input>
        <div className={style.searchIcon}> <HiSearch /></div>
      </div>
    </div>
  );

 };

 export default SearchBox;