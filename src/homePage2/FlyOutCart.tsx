import React from 'react';
import styles from './FlyOutCart.module.css';
import Button from '../homePage1/Button';

interface FlyOutCartProps {
  onClose: () => void;
  onBuy: () => void;
}

const FlyOutCart: React.FC<FlyOutCartProps> = ({ onClose, onBuy }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.FlyCart}>
        <div className={styles.cartHeader}>
          <h2>Shopping Cart</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <div className={styles.cartItems}>
          {/* Пример товара */}
          <div className={styles.cartItem}>
            <img src="https://via.placeholder.com/60" alt="Product" />
            <div className={styles.itemDetails}>
              <h3>Tray Table</h3>
              <p>$19.19</p>
            </div>
          </div>
        </div>

        <div className={styles.cartTotal}>
          <h3>Total: $19.19</h3>
          <Button className={styles.checkoutButton}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default FlyOutCart;