import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext(); // Объявляем контекст

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Tray Table', color: 'Black', img: '/images/black-table.jpg', price: 19, quantity: 2 },
    { id: 2, title: 'Tray Table', color: 'Red', img: '/images/red-table.jpg', price: 19, quantity: 2 },
    { id: 3, title: 'Table Lamp', color: 'Gold', img: '/images/lamp.jpg', price: 39, quantity: 1 },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;