import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const ProductsPage = () => {
  const [term, setTerm] = useState("a");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const getDrinks = async () => {
      // ?f=a
      try {
        const { data } = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php",
          {
            params: {
              s: debouncedTerm,
            },
          }
        );

        console.log("data ", data);
        setDrinks(data.drinks === null ? [] : data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    getDrinks();
  }, [debouncedTerm]);

  const displayProducts = drinks.map((drink) => {
    return (
      <li
        className="my-2 px-0 sm:my-2 sm:px-2 lg:my-4 lg:px-4 w-full sm:w-1/2 md:w-1/3"
        key={drink.idDrink}
      >
        <ProductItem
          id={drink.idDrink}
          name={drink.strDrink}
          photo={drink.strDrinkThumb}
          product={drink}
          price={Number(drink.idDrink)}
        />
      </li>
    );
  });

  return (
    <div className="h-full min-h-full bg-white text-black p-6 lg:pt-10 w-full max-w-5xl flex flex-col items-center pb-24  md:pb-16  mx-auto">
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
      {drinks.length === 0 || drinks === null ? (
        <div className="h-screen">
          <h1>No se encontró un resultado</h1>
        </div>
      ) : (
        <>
          <ul className=" flex flex-wrap mx-auto w-full h-full min-h-full">
            {displayProducts}
          </ul>
        </>
      )}
    </div>
  );
};

export { ProductsPage };
