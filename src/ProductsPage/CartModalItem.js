import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Transition } from "@headlessui/react";

const CartModalItem = ({ id, photo, name, amount, price, dispatch }) => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <Transition
      show={isShowing}
      leave="transition-opacity transition ease-in-out duration-700 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-full"
      className=" flex w-full justify-between py-2 text-xs transition-all hover:bg-gray-100 rounded"
      afterLeave={() => {
        dispatch({ type: "remove", payload: id });
      }}
      key={id}
    >
      <div className="flex w-4/6 sm:w-3/6">
        <div className="pr-3 sm:pl-3 ">
          <img src={photo} alt="" className="w-20 h-20" />
        </div>
        <div className="flex flex-col">
          <b className="font-bold text-sm">{name}</b>
        </div>
      </div>
      <div className="w-1/6 sm:w-2/6 flex items-center justify-center">
        x {amount}
      </div>
      <div className=" w-2/6 flex items-center justify-center">
        S/ {price * amount}
      </div>
      <IoCloseOutline
        className="text-3xl ml-auto pr-2 cursor-pointer"
        onClick={() => setIsShowing(false)}
      />
    </Transition>
  );
};

export default CartModalItem;
