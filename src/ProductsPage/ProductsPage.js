import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import CartModal from "./CartModal";
import SearchBox from "./SearchBox";
import loader from "../imgs/drink_loader.svg";
import { Transition } from "@headlessui/react";

const ProductsPage = () => {
  const [term, setTerm] = useState("a");
  const [loading, setLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [drinks, setDrinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log("showModal", showModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

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
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php",
          {
            params: {
              s: debouncedTerm,
            },
          }
        );

        setLoading(false);
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
        className="my-2 px-12 sm:my-2 sm:px-2 lg:my-4 lg:px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        key={drink.idDrink}
      >
        <ProductItem
          id={drink.idDrink}
          name={drink.strDrink}
          photo={drink.strDrinkThumb}
          product={drink}
          price={Number(drink.idDrink)}
          openModal={() => setShowModal(true)}
        />
      </li>
    );
  });

  return (
    <div className="h-full min-h-full  text-black p-6 lg:pt-10 w-full max-w-5xl flex flex-col items-center pb-24  md:pb-16  mx-auto">
      <CartModal showModal={showModal} closeModal={() => setShowModal(false)} />
      <SearchBox setTerm={setTerm} />
      {loading ? (
        <div className="h-80 flex">
          <img className="w-20 h-20 animate-spin m-auto" src={loader} alt="" />
        </div>
      ) : drinks.length === 0 || drinks === null ? (
        <div className="h-80 flex items-center">
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
