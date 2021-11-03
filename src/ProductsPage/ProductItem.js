import React, { useContext } from "react";
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
    <div className="flex flex-col w-full mb-2 text-center overflow-hidden  ">
      <div className="relative">
        <img src={photo} alt="" className="w-full rounded-lg" />
        <div className="absolute flex bg-black inset-0 transition-opacity	duration-500 opacity-0 hover:opacity-60 rounded-lg ">
          <button
            className="h-16 w-16 text-white opacity-100 text-2xl border absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform transparent active:bg-primary z-50"
            onClick={() => {
              dispatch({ type: "add_to_cart", payload: product });
              openModal();
            }}
          >
            <FaCartPlus className="absolute  group-active:hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform" />
          </button>
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
