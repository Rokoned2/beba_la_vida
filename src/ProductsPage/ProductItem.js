import React, { useContext } from "react";
import { DispatchContext } from "../CartContext";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

const ProductItem = ({ id, photo, name, price, product, openModal }) => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex flex-col w-full mb-2 text-center overflow-hidden  ">
      <div className="relative">
        <img src={photo} alt="" className="w-full rounded-lg" />
        <div className="absolute flex  bg-black inset-0 transition-opacity	duration-500 opacity-0 hover:opacity-60 rounded-lg">
          <button className="h-16 w-16 text-white text-2xl border absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform transparent active:bg-primary">
            <FaShoppingCart className="absolute  group-active:hidden top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform" />
            {/* <FaCartPlus className="text-lg text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform" /> */}
          </button>
        </div>
      </div>
      <div className="py-2 ">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="italic text-sm pt-2 medium">S/ {price}</p>
      </div>
      {/* <button
        className="w-full border bg-blue-800 hover:bg-blue-900 focus:bg-blue-600 transition-all py-3 text-white rounded-b text-sm"
        onClick={() => {
          dispatch({ type: "add_to_cart", payload: product });
          openModal();
        }}
      >
        Añadir al carrito
      </button> */}
    </div>
  );
};

export default ProductItem;
