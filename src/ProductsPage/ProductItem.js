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
    <div className="flex flex-col w-full  mb-2 text-center  ">
      <div className="flip-card ">
        <div className="flip-card__inner">
          <div className="flip-card__front">
            <img
              src={photo}
              alt=""
              className="w-full rounded-lg object-cover object-center "
            />
          </div>
          <div className=" flip-card__back flex flex-col bg-gradient-to-br to-primary-dark from-primary rounded-lg">
            <button
              className="btn relative m-auto inline-block text-center h-16 w-16 overflow-hidden text-white text-2xl border hover:bg-primary z-50"
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

      <div className="pt-1 pb-2">
        <h3 className="text-lg italic text-primary">{category}</h3>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="italic text-sm pt-2 ">S/ {price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
