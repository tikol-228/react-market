import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../assets/headerLogo.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  let headerContainerStyles: React.CSSProperties = {};

  // Изменение цвета фона в зависимости от текущего пути
  if (location.pathname === '/tecnique') {
    headerContainerStyles.backgroundColor = 'yellow';
  }

  return (
    <header style={headerContainerStyles} className={styles.headerContainer}>
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
        <Link to="/search">
          <img src={search} alt="Search" />
        </Link>
        <Link to="/my-account">
          <img src={account} alt="Account" />
        </Link>
        <Link to="/cart">
          <img src={bag} alt="Bag" />
        </Link>
      </div>
    </header>
  );
};

export default Header;