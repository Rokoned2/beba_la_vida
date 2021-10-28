import React, { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useContext(DispatchContext);
  useEffect(() => {
    dispatch({ type: "get_totals" });
  }, [dispatch]);

  const state = useContext(StateContext);

  const displayProducts = state.state.cart.map(
    ({ idDrink, strDrink, strDrinkThumb, amount }) => (
      <div className="py-4" key={idDrink}>
        <CartItem
          id={idDrink}
          photo={strDrinkThumb}
          name={strDrink}
          price={Number(idDrink)}
          amount={amount}
          dispatch={dispatch}
        />
      </div>
    )
  );
  return (
    <div
      className="flex flex-col lg:flex-row  w-full max-w-6xl mx-auto 
 "
    >
      <div className="w-full lg:w-3/4 bg-white p-6">
        <div className="h-full">
          <div className="flex justify-between pb-4">
            <div className="text-xl font-bold w-3/6 text-center">Producto</div>
            <div className="text-xl font-bold w-2/6 text-center">Cantidad </div>
            <div className="text-xl font-bold w-1/6"></div>
          </div>
          {state.state.cart.length === 0 ? (
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-center">El carrito está vacío</h1>
            </div>
          ) : (
            <div className="divide-solid divide-y divide-gray-400 ">
              {displayProducts}
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/4 bg-white p-6 lg:p-0">
        <h2 className="text-right text-3xl font-bold lg:flex  lg:items-center lg:justify-center lg:h-full">
          Total: S/. {state.state.total}
        </h2>
      </div>
    </div>
  );
};

export { Cart };
