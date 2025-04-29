import { useState } from 'react'
import styles from './FlyMenu.module.css'
import Button from './Button'
import Link from './Link'
import Input from './Input'
import bar from '../assets/bar.svg'
import headerLogo from '../assets/headerLogo.svg'
import cross from '../assets/cross.svg'
import menuInsta from '../assets/menuInsta.svg'
import menuFacebook from '../assets/menuFacebook.svg'
import menuYoutube from '../assets/menuYoutube.svg'

const FlyMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <Button
          onClick={() => setIsOpen(true)}
          className={styles.menuButton}
        >
          <img src={bar} alt="Menu" />
        </Button>

      <div className={`${styles.flyMenu} ${isOpen ? styles.show : ''}`}>
        <img src={headerLogo} className={styles.headerLogoMenu}/>
        <Button
          onClick={() => setIsOpen(false)}
          className={styles.closeButton}
        >
          <img src={cross}/>
        </Button>

        <Input type="text" placeholder="Search" className={styles.searchInput} />

        <nav className={styles.nav}>
          <Link href="#">Home</Link>
          <Link href="#">Shop</Link>
          <Link href="#">Product</Link>
          <Link href="#">Contact Us</Link>
        </nav>

        <div className={styles.cartWishlist}>
          <Link href="#">Cart</Link>
          <Link href="#">Wishlist</Link>
        </div>

        <Button className={styles.signInButton}>Sign In</Button>
        <div className={styles.socialIcons}>
          <img src={menuInsta}/>
          <img src={menuFacebook}/>
          <img src={menuYoutube}/>
        </div>
      </div>
    </>
  )
}

export default FlyMenu
