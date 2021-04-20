import CartContext from "./CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const findIndex = (item) => {
    return cart.findIndex((elem) => elem.id === item.id);
  };

  const isInCart = (item) => {
    return findIndex(item) !== -1 ? true : false;
  };

  const addItem = (item) => {
    let itemIndex = findIndex(item);

    if (isInCart(item)) {
      let newQuantity = parseInt(cart[itemIndex].quantity) + parseInt(item.quantity);
      cart[itemIndex].quantity = newQuantity;
    } else {
      setCart([...cart, item]);
    }

    setCartLength(parseInt(cartLength) + parseInt(item.quantity));
  };

  const removeItem = (item) => {
    if (isInCart(item)) {
      setCart(
        cart.filter(function (i) {
          return i.id !== item.id;
        })
      );
      setCartLength(cartLength - parseInt(item.quantity));
    }
  };

  const total = cart.reduce(
    (total, item) => total + parseInt(item.price) * parseInt(item.quantity),
    0
  );

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        addItem,
        removeItem,
        isInCart,
        total,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
