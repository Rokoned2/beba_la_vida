import React from "react";
import { ImCross } from "react-icons/im";

const CartItem = ({ id, photo, name, amount, price, dispatch }) => {
  return (
    <div className="flex w-full justify-between" key={id}>
      <div className="flex w-3/6">
        <div className="pr-3 ">
          <img src={photo} alt="" className="w-40" />
        </div>
        <div className="flex flex-col">
          <b className="font-bold text-lg">{name}</b>
          <p>S/ {price}</p>
        </div>
      </div>
      <div className=" w-2/6 flex items-center justify-center">{amount}</div>
      <ImCross
        className="text-2xl ml-auto pr-2 cursor-pointer"
        onClick={() => {
          dispatch({ type: "remove", payload: id });
        }}
      />
    </div>
  );
};

export default CartItem;
