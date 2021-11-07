import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { DispatchContext, StateContext } from "./CartContext";

const Navbar = ({ showModal }) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  useEffect(() => {
    dispatch({ type: "get_totals" });
  }, [dispatch, state.state.cart]);

  return (
    <div className="flex justify-between items-center px-6 py-2 fixed top-0 z-50 w-full text-black font-spectral font-light bg-white shadow-md">
      <div className="max-w-6xl	 flex justify-between w-full mx-auto">
        <div className="flex justify-center items-center py-0.5 cursor-pointer">
          <h4 className="font-bold text-2xl py-2">
            LIQUOR <span className="text-primary">STORE</span>
          </h4>
        </div>
        <div className="flex font-spectral md:space-x-6 items-center">
          <div className="space-x-6 items-center hidden md:flex ">
            <div className="cursor-pointer transform hover:scale-125 duration-500">
              INICIO
            </div>
            <div className="cursor-pointer text-primary transform hover:scale-125 duration-500">
              PRODUCTOS
            </div>
            <div className="cursor-pointer transform hover:scale-125 duration-500">
              BLOG
            </div>
            <div className="cursor-pointer transform hover:scale-125 duration-500 ">
              CONTACTO
            </div>
          </div>
          <input
            type="checkbox"
            className="nav__checkbox hidden"
            id="navi-toggle"
          />
          <label
            htmlFor="navi-toggle"
            className="md:hidden nav__button w-14 h-14 right-3"
          >
            <span className="nav__icon">&nbsp;</span>
          </label>

          <div className="nav__background w-12 h-12 absolute right-4 md:hidden">
            &nbsp;
          </div>

          <div className="nav__menu h-screen fixed top-0 left-0 w-0 text-2xl text-white md:hidden">
            <ul className="nav__list">
              <li className="nav__item ">
                <p className="nav__link">INICIO</p>
              </li>
              <li className="nav__item">
                <p className="nav__link">PRODUCTOS</p>
              </li>
              <li className="nav__item">
                <p className="nav__link">BLOG</p>
              </li>
              <li className="nav__item">
                <p className="nav__link">CONTACTO</p>
              </li>
            </ul>
          </div>

          <div
            className="absolute right-3 top-20 w-14 h-14 shadow-md md:shadow-none  rounded-full md:rounded-none bg-white md:bg-transparent flex justify-center items-center  md:static cursor-pointer transform hover:scale-125 duration-500"
            onClick={showModal}
          >
            <FaShoppingCart className="text-xl text-black" />
            <div className="rounded-full bg-primary h-5 w-5 flex items-center  font-bold  justify-center absolute	top-1 right-1">
              {state.state.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
