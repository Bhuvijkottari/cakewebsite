
import React, { createContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
       
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity-1 }
            : cartItem
        );
      } else {
       
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

 
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
