import Link from './Link';
import headerLogo from '../assets/headerLogo.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let headerContainerStyles: React.CSSProperties = {};

  const handleHomeClick = () => {
    navigate('/HomePage2');
  };

  const handleContactUsClick = () => {
    navigate('/ContactUs2');
  };

  // Исправлено: путь должен начинаться с /
  if (location.pathname === '/tecnique') {
    headerContainerStyles.backgroundColor = 'yellow';
  }

  return (
    <header style={headerContainerStyles} className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={headerLogo} alt="Logo" />
      </div>
      <nav className={styles.navLinks}>
        <Link href="#" onClick={handleHomeClick}>Home</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Categories</Link>
        <Link href="#">About</Link>
        <Link href="#" onClick={handleContactUsClick}>Contact</Link>
      </nav>
      <div className={styles.headerActions}>
        <img src={search} alt="Search" />
        <img src={account} alt="Account" />
        <img src={bag} alt="Bag" />
      </div>
    </header>
  );
};

export default Header;