import React, { createContext, useState } from "react";
import AddToCard from "./AddToCard";

const CartContext = createContext();

const CartProvider = () => {
    const [cartData, setCartData] = useState([]);
    const contextValue = {
        cartData,
        setCartData,
    };

    return <CartContext.Provider value={contextValue}>
        <AddToCard />
    </CartContext.Provider>;
};

export { CartContext, CartProvider };