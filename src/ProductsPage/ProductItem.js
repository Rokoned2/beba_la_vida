import React, { useContext, useState } from "react";
import { DispatchContext } from "../CartContext";
import { FaCartPlus } from "react-icons/fa";

const ProductItem = ({
  id,
  photo,
  category,
  name,
  price,
  product,
  openModal,
}) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="flex flex-col w-full  mb-2 text-center ">
      <div className="flip-card ">
        <div className="flip-card__inner ">
          <div className="flip-card__front shadow-xl">
            <img
              src={photo}
              alt=""
              className="w-full h-full rounded-lg object-cover object-center "
            />
          </div>
          <div className="hidden flip-card__back shadow-md md:flex flex-col bg-gradient-to-br to-primary-dark from-primary rounded-lg">
            <button
              className="btn relative m-auto inline-block text-center h-16 w-16 overflow-hidden text-white text-2xl border focus:bg-primary z-50 transition-all "
              onClick={() => {
                dispatch({ type: "add_to_cart", payload: product });
                openModal();
              }}
            >
              <FaCartPlus className="m-auto h-full cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-3 pb-2">
        <h3 className="text-lg italic text-primary">{category}</h3>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="italic text-sm pt-2 ">S/ {price}</p>
        <button
          className="btn btn--rounded-full  relative md:hidden mt-3 px-6 py-2 bg-primary rounded-full text-white btn--primary-dark shadow-lg "
          onClick={() => {
            dispatch({ type: "add_to_cart", payload: product });
            openModal();
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
