import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DispatchContext, StateContext } from "./CartContext";
import logo from "./imgs/martini_logo_white.svg";

const Navbar = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  useEffect(() => {
    dispatch({ type: "get_totals" });
  }, [dispatch, state.state.cart]);

  return (
    <div className="flex justify-between items-center bg-blue-700 px-6 fixed top-0 z-20 w-full  ">
      <div className="max-w-screen-xl flex justify-between w-full mx-auto">
        <div className="flex justify-center items-center py-0.5 cursor-pointer">
          {/* <div className="font-bold text-3xl text-white">Beba la Vida</div> */}
          <img className=" h-16 text-white fill-current" src={logo} alt="" />
        </div>
        <div className="flex font-serif space-x-8 items-center text-white">
          <div className="font-serif space-x-8 items-center hidden md:flex ">
            <div className="cursor-pointer">INICIO</div>
            <div className="cursor-pointer">PRODUCTOS</div>
            <div className="cursor-pointer">BLOG</div>
            <div className="cursor-pointer">CONTACTO</div>
          </div>
          <div className="flex justify-center items-center p-4 relative cursor-pointer">
            <FaShoppingCart className="text-3xl text-white" />
            <div className="rounded-full bg-blue-500 h-6 w-6 flex items-center text-white font-bold font-sans justify-center absolute	top-1 right-1">
              {state.state.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
