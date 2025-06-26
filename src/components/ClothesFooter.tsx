import styles from './ClothesFooter.module.css';
import visa from '../assets/visa.svg'
import mastercard from '../assets/mastercard.svg'
import applePay from '../assets/applePay.svg'
import stripe from '../assets/stripe.svg'
import american from '../assets/american.svg'
import paypal from '../assets/paypal.svg'
import menuInsta from '../assets/menuInsta.svg'
import menuFacebook from '../assets/menuFacebook.svg'
import menuYoutube from '../assets/menuYoutube.svg'

const ClothesFooter = () => {
  return (
    <>
        <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.companyInfo}>
          <h2 className={styles.logo}>3legant.</h2>
          <address className={styles.address}>
            43111 Hai Trieu street,<br />
            District 1, HCMC<br />
            Vietnam<br />
            <a href="tel:+8478563237">84-756-3237</a>
          </address>
          <div className={styles.socialIcons}>
            <a href="#"><img src={menuInsta}/></a>
            <a href="#"><img src={menuFacebook}/></a>
            <a href="#"><img src={menuYoutube}/></a>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h3>Page</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h3>Info</h3>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h3>Join Newsletter</h3>
          <p>
            Subscribe our newsletter to get more deals, new products and promotions
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">→</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>Copyright © 2025 3legant. All rights reserved</p>
        <div className={styles.policyLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className={styles.paymentIcons}>
          <img src={visa}/>
          <img src={american}/>
          <img src={mastercard}/>
          <img src={stripe} />
          <img src={paypal}/>
          <img src={applePay}/>
        </div>
      </div>
    </footer>
    </>
  )
}

export default ClothesFooter