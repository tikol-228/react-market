import Link from './Link'
import logo from '../assets/logo.svg'
import styles from './Footer.module.css'
import insta from '../assets/insta.svg'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <>
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <img src={logo} className={styles.footerLogo}/>
                <p className={styles.footerText}>Gift & Decoration Store</p>
            </div>
            
            <div className={styles.footerLinks}>
            <Link href='#' onClick={() => console.log(1)}>Home</Link>
            <Link href='#' onClick={() => console.log(1)}>Shop</Link>
            <Link href='#' onClick={() => console.log(1)}>Product</Link>
            <Link href='#' onClick={() => console.log(1)}>Blog</Link>
            <Link href='#' onClick={() => console.log(1)}>Contact Us</Link>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.footerBottomText}>Copyright &copy; 2023 3legant. All rights reserved</p>
                <div className={styles.footerBottomLinks}>
                    <img src={insta} alt="" />
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                    <Link href='#' onClick={() => console.log(1)}>Privacy Policy</Link>
                    <Link href='#' onClick={() => console.log(1)}>Terms of Use</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer