import CartContext from "./CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});

  const findIndex = (item) => {
    return cart.findIndex((elem) => elem.id === item.id);
  };

  const isInCart = (item) => {
    return findIndex(item) !== -1 ? true : false;
  };

  const addItem = (item) => {
    let itemIndex = findIndex(item);
    if (isInCart(item)) {
      cart[itemIndex].quantity += parseInt(item.quantity);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (item) => {
    if (isInCart(item)) {
      setCart(
        cart.filter(function (i) {
          return i.id !== item.id;
        })
      );
    }
  };

  const totalItems = cart.length;

  const total = cart.reduce(
    (total, item) => total + parseInt(item.price) * parseInt(item.quantity),
    0
  );

  const clear = () => {
    setCart([]);
  };

  const createOrder = (id) => {
    setOrder({ id: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        total,
        totalItems,
        clear,
        order,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
