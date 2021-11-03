import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";
import CartModal from "./CartModal";
import SearchBox from "./SearchBox";
import loader from "../imgs/drink_loader.svg";
import Banner from "./Banner";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { useMediaQuery } from "react-responsive";

const ProductsPage = ({ showModal, setShowModal }) => {
  const [term, setTerm] = useState("a");
  const [loading, setLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [items, setDrinks] = useState([]);
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1224 });

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 12;
  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      if (isBigScreen) {
        document.body.style.paddingRight = "17px";
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [showModal, isBigScreen]);

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

        setDrinks(data.drinks === null ? [] : data.drinks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getDrinks();
  }, [debouncedTerm]);

  const displayProducts = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return (
        <li
          className="mb-12 px-10 sm:my-2 sm:px-2 lg:my-4 lg:px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          key={item.idDrink}
        >
          <ProductItem
            id={item.idDrink}
            category={item.strCategory}
            name={item.strDrink}
            photo={item.strDrinkThumb}
            product={item}
            price={Number(item.idDrink)}
            openModal={() => setShowModal(true)}
          />
        </li>
      );
    });

  return (
    <div className="mt-18 pt-16">
      <Banner />
      <div className="h-full min-h-full   text-black p-6 lg:pt-10 w-full max-w-6xl flex flex-col items-center pb-24  md:pb-16  mx-auto">
        <CartModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
        <SearchBox setTerm={setTerm} />
        {loading ? (
          <div className="h-80 flex">
            <img
              className="w-20 h-20 animate-spin m-auto"
              src={loader}
              alt=""
            />
          </div>
        ) : items.length === 0 || items === null ? (
          <div className="h-80 flex items-center">
            <h1 className="text-xl">No se encontró un resultado</h1>
          </div>
        ) : (
          <>
            <ul className=" flex flex-wrap mx-auto w-full h-full min-h-full sm:mb-7 ">
              {displayProducts}
            </ul>
            <ReactPaginate
              previousLabel={<MdNavigateBefore className="text-xl" />}
              nextLabel={<MdNavigateNext className="text-xl" />}
              pageCount={pageCount}
              onPageChange={changePage}
              pageLinkClassName="w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center"
              containerClassName="flex justify-center space-x-2 items-center pt-2 w-full text-gray-700 "
              activeClassName="bg-primary text-white w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center"
              disabledClassName="opacity-100"
            />
          </>
        )}
      </div>
    </div>
  );
};

export { ProductsPage };
