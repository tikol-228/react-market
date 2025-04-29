import  Link from './Link';
import headerLogo from '../assets/headerLogo.svg';
import search from '../assets/search.svg';
import bag from '../assets/bag.svg';
import account from '../assets/account.svg';
import styles from './Header2.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/HomePage2');
  }
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
        <img src={bag}/>
    </div>
  </header>
  );
};
export default Header;