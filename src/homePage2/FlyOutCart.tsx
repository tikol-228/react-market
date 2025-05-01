import React from 'react';
import styles from './FlyOutCart.module.css';
import Button from '../homePage1/Button';

interface FlyOutCartProps {
  onClose: () => void;
}

const FlyOutCart: React.FC<FlyOutCartProps> = ({ onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: 'Tray Table',
      price: '$19.19',
      image: 'https://via.placeholder.com/60',
    },
    {
      id: 2,
      name: 'Table Lamp',
      price: '$30.00',
      image: 'https://via.placeholder.com/60',
    },
  ];

  const totalPrice = '$49.19';

  return (
    <div className={styles.FlyCart}>
      <div className={styles.cartHeader}>
        <h2>Shopping Cart</h2>
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>

      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div className={styles.cartItem} key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className={styles.itemDetails}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartTotal}>
        <h3>Total: {totalPrice}</h3>
        <Button className={styles.checkoutButton}>Checkout</Button>
      </div>
    </div>
  );
};

export default FlyOutCart;