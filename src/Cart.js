import React, { useContext } from "react";
import { StateContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const state = useContext(StateContext);

  console.log("statecart", state);

  const displayProducts = state.state.cart.map(
    ({ idDrink, strDrink, strDrinkThumb, quantity = 0 }) => (
      <CartItem
        key={idDrink}
        id={idDrink}
        photo={strDrinkThumb}
        name={strDrink}
        price={Number(idDrink)}
        quantity={quantity}
      />
    )
  );
  return (
    <div className="flex">
      <div className="lg:w-3/4 bg-white p-6">
        <div>
          {state.state.cart.length === 0 ? (
            <h1>El carrito está vacío</h1>
          ) : (
            displayProducts
          )}
        </div>
      </div>
      <div className="lg:w-1/4 bg-white">
        <h2 className="text-4xl font-bold">Total:</h2>
      </div>
    </div>
  );
};

export default Cart;
