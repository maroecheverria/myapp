import CartContext from "../context/CartContext";
import { useState } from 'react';

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
}