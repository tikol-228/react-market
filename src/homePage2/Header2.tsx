import  Link from './Link';
import headerLogo from '../assets/headerLogo.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header2.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import FlyOutCart from './FlyOutCart';

const Header = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    navigate('/HomePage2');
  }

  const handleCartClick = () => {
    setCartOpen(prev => !prev);
  }

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

  return (
  <header className={styles.headerContainer}>
    <div className={styles.headerLogo}>
      <img src={headerLogo} alt="Logo"/>
    </div>
    <nav className={styles.navLinks}>
      <Link href="#" onClick={handleHomeClick}>Home</Link>
      <Link href="#">Shop</Link>
      <Link href="#">Categories</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </nav>
    <div className={styles.headerActions}>
        <img src={search}/>
        <img src={account}/>
        <img src={bag} onClick={handleCartClick}/>
        {cartOpen && (
          <div className={styles.cartContainer} ref={cartRef}>
            <FlyOutCart onClose={() => setCartOpen(false)} />
          </div>
        )}
    </div>
  </header>
  );
};
export default Header;