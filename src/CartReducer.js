const increaseItemAmount = (cartItems, id) =>
  cartItems.map((cartItem) => ({
    ...cartItem,
    amount: cartItem.idDrink === id ? cartItem.amount + 1 : cartItem.amount,
  }));

const decreaseItemAmount = (cartItems, id) =>
  cartItems.map((cartItem) => ({
    ...cartItem,
    amount: cartItem.id === id ? cartItem.amount - 1 : cartItem.amount,
  }));

const getItemTotals = (cartState) => {
  let { total, amount } = cartState.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;

      cartTotal.total += itemTotal;
      cartTotal.amount += amount;

      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  return { ...cartState, total, amount };
};

const addToCart = (currentCartItems, CartItem) => {
  let exist = false;
  let tempCart = currentCartItems.map((currentCartItem) => {
    if (currentCartItem.idDrink === CartItem.idDrink) {
      exist = true;
      currentCartItem = {
        ...currentCartItem,
        amount: currentCartItem.amount + 1,
      };
    }
    return currentCartItem;
  });

  if (exist === false) return [...currentCartItems, { ...CartItem, amount: 1 }];
  return tempCart;
};
// )

// let updatedCartItems = [];
// currentCartItems.forEach((currentCartItem) => {
//   if (currentCartItem.idDrink === CartItem.idDrink) {
//     console.log("pasa");
//     updatedCartItems = [
//       ...currentCartItems,
//       {
//         ...currentCartItem,
//         amount: currentCartItem.amount + 1,
//       },
//     ];
//   }
// });
// if (updatedCartItems.length !== 0) {
//   console.log("updatedCartItems", updatedCartItems);
//   return [updatedCartItems];
// }
// return [...currentCartItems, { ...CartItem, amount: 1 }];
// };

export function CartReducer(state, action) {
  switch (action.type) {
    case "add_to_cart":
      return { ...state, cart: addToCart(state.cart, action.payload) };
    case "clear_cart":
      return { ...state, cart: [] };
    case "decrease":
      return {
        ...state,
        cart: decreaseItemAmount(state.cart, action.payload.id),
      };
    case "increase":
      return {
        ...state,
        cart: increaseItemAmount(state.cart, action.payload),
      };

    case "remove":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    case "get_totals":
      return getItemTotals(state);

    default:
      return state;
  }
}
