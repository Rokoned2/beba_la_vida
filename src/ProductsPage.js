import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

const ProductsPage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const { data } = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        setDrinks(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    getDrinks();
  }, []);

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
    <div className="bg-black text-white p-6 lg:pt-10 w-full max-w-5xl flex flex-col items-center pb-24  md:pb-16  mx-auto">
      {drinks.length === 0 ? (
        <h1>No se encontró un resultado</h1>
      ) : (
        <ul className="flex flex-wrap mx-auto w-full">{displayProducts}</ul>
      )}
    </div>
  );
};

export default ProductsPage;
