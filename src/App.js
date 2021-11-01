import React, { Suspense } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { ProductsPage } from "./ProductsPage";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="w-16 h-16 border-b-2 border-white rounded-full animate-spin  inset-0	absolute m-auto "></div>
      }
    >
      <CartContext>
        <div className="w-full h-full min-h-screen">
          <Navbar />
          <ProductsPage />
        </div>
      </CartContext>
    </Suspense>
  );
};

export default App;
