import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Link from './Link';
import headerLogo from '../assets/headerLogo.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header2.module.css';
import FlyOutCart from './FlyOutCart';

interface Header2Props {
  onAddToCart: (item: { id: string; name: string; price: number; quantity: number }) => void;
}

const Header2: React.FC<Header2Props> = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    navigate('/HomePage2');
  };

  const handleCartClick = () => {
    setCartOpen((prev) => !prev);
  };

  const handleContactUsClick = () => {
    navigate('/ContactUs');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddToCart = (item: { id: string; name: string; price: number; quantity: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    onAddToCart(item);
  };

  const handleAddExampleItem = () => {
    const item = { id: '1', name: 'Example Item', price: 100, quantity: 1 }; // Пример товара
    handleAddToCart(item);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={headerLogo} alt="Logo" />
      </div>
      <nav className={styles.navLinks}>
        <Link href="#" onClick={handleHomeClick}>
          Home
        </Link>
        <Link href="#">Shop</Link>
        <Link href="#">Categories</Link>
        <Link href="#" onClick={handleContactUsClick}>
          About
        </Link>
        <Link href="#">Contact</Link>
      </nav>
      <div className={styles.headerActions}>
        <img src={search} alt="Search" />
        <img src={account} alt="Account" />
        <img src={bag} alt="Cart" onClick={handleCartClick} />
        {cartOpen && (
          <div className={styles.cartContainer} ref={cartRef}>
            <FlyOutCart
              onClose={() => setCartOpen(false)}
              onBuy={() => console.log('Checkout initiated')}
              items={cartItems}
              setCartItems={setCartItems}
            />
          </div>
        )}
      </div>
      <button onClick={handleAddExampleItem}>Add Example Item to Cart</button>
    </header>
  );
};

export default Header2;