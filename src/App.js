import "aos/dist/aos.css";
import React, { Suspense, useState } from "react";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import { ProductsPage } from "./ProductsPage";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Suspense
      fallback={
        <div className="w-16 h-16 border-b-2 border-white rounded-full animate-spin  inset-0	absolute m-auto "></div>
      }
    >
      <CartContext>
        <div className="w-full h-full min-h-screen">
          <Navbar showModal={() => setShowModal(true)} />
          <ProductsPage showModal={showModal} setShowModal={setShowModal} />
        </div>
      </CartContext>
    </Suspense>
  );
};

export default App;
