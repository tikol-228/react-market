import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage1 from './homePage1/HomePage1';
import HomePage2 from './homePage2/HomePage2';
import Auth from './pages/Auth';
import React, { useState } from 'react';
import FlyOutCart from './homePage2/FlyOutCart';
import Cart from './pages/Cart';

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
  quantity: number; // Добавлено поле quantity для управления количеством
}

function App() {
  const [cartItems, setCartItems] = useState<Card[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Функция для добавления товара в корзину
  const handleBuy = (item: Card) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  // Функция для закрытия корзины
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Функция для оформления заказа
  const handleCheckout = () => {
    alert('Checkout not implemented yet!');
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/HomePage1" element={<HomePage1 />} />
          <Route path="/homePage2" element={<HomePage2 onBuy={handleBuy} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {isCartOpen && (
          <FlyOutCart
            onClose={handleCloseCart}
            onBuy={handleCheckout}
            items={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Router>

    </>
  );
}

export default App;
