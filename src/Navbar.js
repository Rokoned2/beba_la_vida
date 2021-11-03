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
    <div className="flex justify-between items-center px-6 py-2 fixed top-0 z-20 w-full text-black font-spectral font-light bg-white shadow-md	">
      <div className="max-w-6xl	 flex justify-between w-full mx-auto">
        <div className="flex justify-center items-center py-0.5 cursor-pointer">
          {/* <div className="font-bold text-3xl text-white">Beba la Vida</div> */}
          <h4 className="font-bold text-2xl ">
            LIQUOR <span className="text-primary">STORE</span>
          </h4>
        </div>
        <div className="flex font-spectral space-x-8 items-center">
          <div className="space-x-8 items-center hidden md:flex ">
            <div className="cursor-pointer">INICIO</div>
            <div className="cursor-pointer">PRODUCTOS</div>
            <div className="cursor-pointer">BLOG</div>
            <div className="cursor-pointer">CONTACTO</div>
          </div>
          <div className="flex justify-center items-center p-4 relative cursor-pointer">
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
