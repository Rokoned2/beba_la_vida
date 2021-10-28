import React, { useContext } from "react";
import { DispatchContext } from "./CartContext";

const ProductItem = ({ id, photo, name, price, product }) => {
  const dispatch = useContext(DispatchContext);
  return (
    <div className="flex flex-col w-full text-center overflow-hidden rounded bg-gray-500">
      <img src={photo} alt="" className="w-full" />
      <h3>{name}</h3>
      <p>S/ {price}</p>
      <button
        onClick={() => dispatch({ type: "add_to_cart", payload: product })}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductItem;
