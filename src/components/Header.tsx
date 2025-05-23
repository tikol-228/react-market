import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.svg';
import searchIcon from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  let headerContainerStyles: React.CSSProperties = {};
  const [showSearch, setShowSearch] = useState(false);

  // Изменение цвета фона в зависимости от текущего пути
  if (location.pathname === '/tecnique') {
    headerContainerStyles.backgroundColor = 'yellow';
  }

  const handleSearch = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <header style={headerContainerStyles}
      className={`
        ${styles.headerContainer}
        ${showSearch ? styles.searchActive : ''}
      `}>
      <div className={styles.headerLogo}>
        <img src={headerLogo} alt="Logo" />
      </div>
      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/shop-page">Shop</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>
      <div className={styles.headerActions}>
        <button onClick={handleSearch} className={styles.iconButton}>
          <img src={searchIcon} alt="Search" />
        </button>
        <Link to="/my-account">
          <img src={account} alt="Account" />
        </Link>
        <Link to="/cart">
          <img src={bag} alt="Bag" />
        </Link>
        {showSearch && (
          <input
            className={styles.search}
            placeholder="search"
            autoFocus
          />
        )}
      </div>
    </header>
  );
};

export default Header;