import React from "react";
import style from "../QA/QuestionList.module.css";
import { HiSearch } from 'react-icons/hi';

const Search = (props) => {
  return (
    <div>
      <div className={style.searchBoxSection}>
        <input className={style.searchBar}
          type="text"
          placeholder="SEARCH REVIEWS"
          onChange={(e) => props.handleSearch(e)}>
        </input>
        <div className={style.searchIcon}> <HiSearch /></div>
      </div>
    </div>
  );

 };

 export default Search;