import React, { useContext } from "react";
import { DispatchContext } from "../CartContext";

const ProductItem = ({ id, photo, name, price, product }) => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex flex-col w-full text-center overflow-hidden rounded hover:bg-gray-100">
      <img src={photo} alt="" className="w-full" />
      <div className="py-2 ">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>S/. {price}</p>
      </div>
      <button
        className="w-full border bg-blue-800 py-3 text-white "
        onClick={() => dispatch({ type: "add_to_cart", payload: product })}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductItem;
