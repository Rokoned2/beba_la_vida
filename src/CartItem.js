import React from "react";
import { ImCross } from "react-icons/im";

const CartItem = ({ id, photo, name, quantity, price = 100 }) => {
  return (
    <div className="flex w-full justify-between" key={id}>
      <div className="flex">
        <div>
          <img src={photo} alt="" className="w-40" />
        </div>
        <div className="flex flex-col">
          <b>{name}</b>
          <p>S/ {price}</p>
        </div>
      </div>
      <div>{quantity}</div>
      <ImCross />
    </div>
  );
};

export default CartItem;
