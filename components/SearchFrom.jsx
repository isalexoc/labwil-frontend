import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchFrom = () => {
  return (
    <form className="relative flex gap-x-[10px]">
      <label htmlFor="mnav-search-input">
        <LuSearch className="text-2xl text-accent" />
      </label>
      <input
        type="text"
        id="mnav-search-input"
        placeholder="Buscar..."
        className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
      />
    </form>
  );
};

export default SearchFrom;
