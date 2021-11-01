import React, { useContext } from "react";
import ReactDom from "react-dom";
import { Transition } from "@headlessui/react";
import { DispatchContext, StateContext } from "../CartContext";
import CartModalItem from "./CartModalItem";

const CartModal = ({ closeModal, showModal }) => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const displayProducts = state.state.cart.map(
    ({ idDrink, strDrink, strDrinkThumb, amount }) => (
      <CartModalItem
        key={idDrink}
        id={idDrink}
        photo={strDrinkThumb}
        name={strDrink}
        price={Number(idDrink)}
        amount={amount}
        dispatch={dispatch}
      />
    )
  );

  return ReactDom.createPortal(
    <Transition
      show={showModal}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className=" fixed w-full inset-0 z-50	 overflow-hidden flex justify-center items-center bg-black bg-opacity-70 	">
        <div className=" border border-blue-500 modal-container bg-white w-11/12 sm:w-10/12 max-w-2xl	 md:w-10/12 lg:w-1/2 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold text-gray-500">Tu Carrito</p>
              <div className=" cursor-pointer z-50" onClick={closeModal}>
                <svg
                  className="fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-2 mx-1 flex flex-col justify-center">
              <div
                id="add_caretaker_form"
                className="w-full h-52 max-h-56 overflow-auto divide-y"
              >
                {displayProducts}
              </div>
              <div className="text-right my-6 mr-3">
                <b>Total: </b>
                <span>S/ {state.state.total}</span>
              </div>
              <div className="flex justify-end p-2 space-x-6">
                <button
                  onClick={closeModal}
                  className="px-4 bg-gray-200 py-1.5 rounded text-black hover:bg-gray-300 font-semibold"
                >
                  Seguir comprando
                </button>
                <button
                  className="px-4 bg-blue-500 py-1.5 ml-3 rounded-md text-white hover:bg-teal-400"
                  onClick=""
                >
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>,
    document.getElementById("portal")
  );
};

export default CartModal;
