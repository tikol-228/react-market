import styles from './Featured.module.css';
import rating from '../assets/rating.svg';
import featured1 from '../assets/featured1.svg';
import featured2 from '../assets/featured2.svg';
import featured3 from '../assets/featured3.svg';
import featured4 from '../assets/featured4.svg';
import featured5 from '../assets/featured5.svg';
import featured6 from '../assets/featured6.svg';

interface Product {
  id: number;
  label?: string;
  discount?: string;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    label: 'HOT',
    title: "Shark - Men's cabretta white golf glove",
    price: '$19.00',
    image: featured1,
  },
  {
    id: 2,
    label: 'HOT',
    discount: '-50%',
    title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
    price: '$24.00',
    oldPrice: '$48.00',
    image: featured2,
  },
  {
    id: 3,
    label: 'HOT',
    title: 'G/FORE - Mens Left Glove Snow 2023',
    price: '$30.00',
    image: featured3,
  },
  {
    id: 4,
    label: 'HOT',
    title: 'Utility Rover – Double Strap Bag All Black – 2023',
    price: '$209.99',
    image: featured4,
  },
  {
    id: 5,
    label: 'HOT',
    discount: '-50%',
    title: 'Air Jordan 1 Low Golf – Iron Grey',
    price: '$111.99',
    oldPrice: '$223.98',
    image: featured5,
  },
  {
    id: 6,
    label: 'HOT',
    discount: '-50%',
    title: 'Air Jordan 1 Low Golf – Iron Grey',
    price: '$111.99',
    oldPrice: '$223.98',
    image: featured6,
  },

];

const Featured = () => {
  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured</h2>
      <div className={styles.cardList}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.labels}>
              {product.label && <span className={styles.label}>{product.label}</span>}
              {product.discount && <span className={styles.discount}>{product.discount}</span>}
            </div>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.title} />
              <button className={styles.addToCart}>Add to cart</button>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.stars}>
                {Array(6).fill(0).map((_, i) => (
                  <img key={i} src={rating} alt="star" />
                ))}
              </div>
              <p className={styles.title}>{product.title}</p>
              <div className={styles.priceBlock}>
                <span className={styles.price}>{product.price}</span>
                {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
