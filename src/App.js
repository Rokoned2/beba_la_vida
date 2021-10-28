import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";
import ProductsPage from "./ProductsPage";

const App = () => {
  return (
    <CartContext>
      <div className="w-full min-h-screen">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route exact path="/carrito" component={Cart} />
          </Switch>
        </Router>
      </div>
    </CartContext>
  );
};

export default App;
