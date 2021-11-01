import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ setTerm }) => {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-8 max-w-xl">
      <BsSearch
        className="
      z-10
      h-full
      leading-snug
      font-normal
      absolute
      text-center text-gray-400
      bg-transparent
      rounded
      text-base
      items-center
      justify-center
      w-8
      pl-3
      py-3
    "
      />
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setTerm(e.target.value)}
        className="
      px-3
      py-3
      placeholder-gray-400
      text-gray-600
      relative
      bg-white 
      rounded
      text-sm
      border-solid
      border border-gray-400
      outline-none
      focus:outline-none focus:ring
      w-full
      pl-10
    "
      />
    </div>
  );
};

export default SearchBox;
