import { useState } from 'react';
import styles from './ProductPage.module.css';
import cardImg6 from '../assets/cardImg6.svg';
import table1 from '../assets/table1.svg';
import table2 from '../assets/table2.svg';
import table3 from '../assets/table3.svg';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Email from '../components/Email';

interface Comment {
  username: string;
  text: string;
}

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const username = localStorage.getItem('username') || 'Anonymous';

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, { username, text: commentText.trim() }]);
      setCommentText('');
    }
  };

  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img src={cardImg6} alt="Tray Table" className={styles.mainImage} />
              <div className={styles.labelNew}>NEW</div>
              <div className={styles.discountBadge}>-50%</div>
            </div>
            <div className={styles.thumbnails}>
              <img src={table1} className={styles.thumb} alt="Tray Table 1" />
              <img src={table2} className={styles.thumb} alt="Tray Table 2" />
              <img src={table3} className={styles.thumb} alt="Tray Table 3" />
            </div>
          </div>

          <div className={styles.detailsSection}>
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
                <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>–</Button>
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
            <Input
              placeholder="Write a review..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button className={styles.submitReview} onClick={handleAddComment}>Submit</Button>
          </div>
        </div>
        <div className={styles.commentContainer}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <p>{comment.username}</p>
              <p className={styles.commentText}>{comment.text}</p>
              <Button className={styles.commentBtn}>Like</Button>
              <Button className={styles.commentBtn}>Reply</Button>
            </div>
          ))}
        </div>
      </section>
      <Email />
    </>
  );
}
