import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 bg-opacity-50">
      <Link className="flex justify-center items-center p-4" to="/">
        <div>Logo</div>
      </Link>
      <Link className="flex justify-center items-center p-4" to="/carrito">
        <FaShoppingCart className="text-3xl" />
      </Link>
    </div>
  );
};

export default Navbar;
