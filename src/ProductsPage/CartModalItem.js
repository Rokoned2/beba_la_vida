import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CartModalItem = ({ id, photo, name, amount, price, dispatch }) => {
  return (
    <div className=" flex w-full justify-between py-2 text-xs " key={id}>
      <div className="flex w-3/6">
        <div className="pr-3">
          <img src={photo} alt="" className="w-20" />
        </div>
        <div className="flex flex-col">
          <b className="font-bold text-sm">{name}</b>
        </div>
      </div>
      <div className=" w-2/6 flex items-center justify-center">x {amount}</div>
      <div className=" w-2/6 flex items-center justify-center">
        S/ {price * amount}
      </div>
      <IoCloseOutline
        className="text-3xl ml-auto pr-2 cursor-pointer"
        onClick={() => {
          dispatch({ type: "remove", payload: id });
        }}
      />
    </div>
  );
};

export default CartModalItem;
