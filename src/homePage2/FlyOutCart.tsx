import React from 'react';
import styles from './FlyOutCart.module.css';
import Link from './Link';
import { useNavigate } from 'react-router-dom';
import Button from '../homePage1/Button';

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
  quantity: number;
}

interface FlyOutCartProps {
  onClose: () => void;
  onBuy: () => void;
  items: Card[];
  setCartItems: React.Dispatch<React.SetStateAction<Card[]>>; // Добавлено для управления состоянием корзины
}

const FlyOutCart: React.FC<FlyOutCartProps> = ({ onClose, onBuy, items, setCartItems }) => {

  const navigate = useNavigate();

  const total = items
    .reduce((sum, item) => sum + parseFloat(item.prise.replace('$', '')) * item.quantity, 0)
    .toFixed(2);

  const plusItem = (item: Card) => {
    setCartItems((prev) =>
      prev.map((ci) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
      )
    );
  };

  const minusItem = (item: Card) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const handleCartClick = () => {
    navigate('/cart')
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.FlyCart}>
        <div className={styles.cartHeader}>
          <h2>Shopping Cart</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.img} className={styles.cartFlyImg} alt={item.title} />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>{item.prise}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => minusItem(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => plusItem(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartTotal}>
          <h3>Total: ${total}</h3>
          <Button className={styles.checkoutButton} onClick={onBuy}>
            Checkout
          </Button>
          <Link href='#' onClick={handleCartClick}>View Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default FlyOutCart;
