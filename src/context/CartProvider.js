import CartContext from "./CartContext";
import { useState } from 'react';

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const findIndex = (item) => {
        return cart.findIndex(elem => elem.id === item.id);
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
        if(isInCart(item)) {
            setCart(cart.filter(function(i) {
                return i.id !== item.id
            }));
        }
    };

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, isInCart, clear}}>
        {children}
    </CartContext.Provider>
}