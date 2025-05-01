import arrival1 from '../assets/arrival1.svg';
import arrival2 from '../assets/arrival2.svg';
import arrival3 from '../assets/arrival3.svg';
import arrival4 from '../assets/arrival4.svg';
import arrival5 from '../assets/arrival5.svg';
import product6 from '../assets/product6.svg';
import product7 from '../assets/product7.svg';
import product8 from '../assets/product8.svg';
import rating from '../assets/rating.svg';
import styles from './Product.module.css';


// BestSellerGrid component
export default function Product() {
    const products = [
        { id: 1, label: 'HOT', image: arrival1, title: 'Sony - WH-1000XM5 Wireless Noise Canceling', rating: 5, price: '$299.99' },
        { id: 2, label: 'HOT', image: arrival2, title: 'Beats Studio Pro', rating: 4, price: '$349.99' },
        { id: 3, label: 'HOT', image: arrival3, title: 'Sony - WH-CH720N Wireless Noise Canceling', rating: 5, price: '$149.99' },
        { id: 4, label: 'HOT', image: arrival4, title: 'Skullcandy - Rail True Wireless Earbuds', rating: 5, price: '$79.99' },
        { id: 5, label: 'HOT', image: arrival5, title: 'Beats Studio Pro', rating: 5, price: '$249.99' },
        { id: 6, label: 'HOT', image: product6, title: 'JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports', rating: 5, price: '$179.95' },
        { id: 7, label: 'HOT', image: product7, title: 'Bose QuietComfort Headphones', rating: 5, price: '$299.00' },
        { id: 8, label: 'HOT', image: product8, title: 'AKG Y600NC Wireless', rating: 5, price: '$349.99' },
      ];
  return (
    <section className={styles.bestSellerSection}>
      <h2 className={styles.sectionTitle}>Best Seller</h2>
      <div className={styles.gridContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <div className={styles.label}>{product.label}</div>
            <img src={product.image} alt={product.title} className={styles.productImage} />

            <div className={styles.rating}>
              {[...Array(5)].map((_, idx) => (
                <img
                  key={idx}
                  src={rating}
                  alt={idx < product.rating ? 'Filled star' : 'Empty star'}
                  className={idx < product.rating ? styles.filledStar : styles.star}
                />
              ))}
            </div>

            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}