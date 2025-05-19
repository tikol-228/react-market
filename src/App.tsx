import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import FlyOutCart from './components/FlyOutCart';
import router from './providers/router';

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
  quantity: number;
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
      <RouterProvider router={router} />
      {isCartOpen && (
        <FlyOutCart
          onClose={handleCloseCart}
          onBuy={handleCheckout}
          items={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </>
  );
}

export default App;
