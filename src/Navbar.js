import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DispatchContext, StateContext } from "./CartContext";

const Navbar = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  useEffect(() => {
    dispatch({ type: "get_totals" });
  }, [dispatch, state.state.cart]);

  return (
    <div className="flex justify-between items-center bg-blue-500 bg-opacity-50 px-6">
      <Link className="flex justify-center items-center p-4" to="/">
        <div className="font-bold text-3xl text-white">Beba la Vida</div>
      </Link>
      <Link
        className="flex justify-center items-center p-4 relative "
        to="/carrito"
      >
        <FaShoppingCart className="text-3xl" />
        <div className="rounded-full bg-blue-700 h-6 w-6 flex items-center justify-center text-white absolute	top-1 right-1">
          {state.state.amount}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
