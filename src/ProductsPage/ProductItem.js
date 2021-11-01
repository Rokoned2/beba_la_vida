import React, { useContext } from "react";
import { DispatchContext } from "../CartContext";

const ProductItem = ({ id, photo, name, price, product, openModal }) => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex flex-col w-full mb-2 text-center overflow-hidden rounded bg-white hover:bg-gray-100 transition-all ">
      <img src={photo} alt="" className="w-full" />
      <div className="py-2 ">
        <h3 className="text-xl font-bold font-serif">{name}</h3>
        <p className="italic text-sm pt-2 ">S/ {price}</p>
      </div>
      <button
        className="w-full border bg-blue-800 hover:bg-blue-900 focus:bg-blue-600 transition-all py-3 text-white rounded-b text-sm"
        onClick={() => {
          dispatch({ type: "add_to_cart", payload: product });
          openModal();
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductItem;
