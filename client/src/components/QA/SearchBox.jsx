import React, { useState, useEffect } from "react";
import style from "./QuestionList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = () => {

  }


  return (
    <div>
      <div className={style.searchBoxSection}>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS...">
        </input>
      </div>
    </div>
  );

 };

 export default SearchBox;