"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('')

  const handleOnSearch = () => {

  }
  return (
    <form className="searchbar" onSubmit={handleOnSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManufacturer} />
      </div>
    </form>
  );
}

export default SearchBar