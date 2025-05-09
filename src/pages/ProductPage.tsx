import { useState } from 'react';
import styles from './ProductPage.module.css';
import cardImg6 from '../assets/cardImg6.svg'
import table1 from '../assets/table1.svg'
import table2 from '../assets/table2.svg'
import table3 from '../assets/table3.svg'
import Input from '../homePage1/Input';
import Button from '../homePage1/Button';

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');

  return (
    <>
    <section>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src={cardImg6} alt="Tray Table" className={styles.mainImage} />
          <div className={styles.thumbnails}>
            <img src={table1} className={styles.thumb}/>
            <img src={table2} className={styles.thumb}/>
            <img src={table3} className={styles.thumb}/>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.labelNew}>NEW</div>
          <div className={styles.discountBadge}>-50%</div>
          <h1 className={styles.title}>Tray Table</h1>
          <p className={styles.description}>
            Buy one or buy a few and make every space where you sit more convenient.
            Light and easy to move around with removable tray top.
          </p>

          <div className={styles.priceBlock}>
            <span className={styles.currentPrice}>$199.00</span>
            <span className={styles.oldPrice}>$400.00</span>
          </div>

          <div className={styles.measurements}>
            <p className={styles.measurementsTitle}>Measurements</p>
            <p className={styles.measurementsValue}>17 1/2×20 5/8 "</p>
          </div>

          <div className={styles.colorSelector}>
            <p>Choose Color</p>
            <div className={styles.colors}>
              <div className={`${styles.colorCircle} ${styles.black} ${styles.selected}`} />
              <div className={`${styles.colorCircle} ${styles.grey}`} />
              <div className={`${styles.colorCircle} ${styles.red}`} />
              <div className={`${styles.colorCircle} ${styles.white}`} />
            </div>
          </div>

          <div className={styles.quantityAndWishlist}>
            <div className={styles.quantityControl}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>–</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className={styles.wishlist}>Wishlist</button>
          </div>

          <button className={styles.addToCart}>Add to Cart</button>

          <div className={styles.meta}>
            <p>SKU: 1117</p>
            <p>CATEGORY: Living Room, Bedroom</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3>Customer Reviews</h3>
        <div className={styles.reviewInput}>
          <Input placeholder="Write a review..." />
          <Button className={styles.submitReview}>Submit</Button>
        </div>
      </div>
      <div>
        
      </div>
    </section>
    </>
  );
}
