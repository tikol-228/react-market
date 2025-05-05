import styles from '../homePage1/Arrivals.module.css';
import ratingCard from '../assets/ratingCard.svg';

interface ProductCardProps {
  id: number;
  img: string;
  rating: number;
  title: string;
  price: string;
  isHovered: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const ProductCard = ({
  id,
  img,
  rating,
  title,
  price,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: ProductCardProps) => {
  return (
    <div
      className={styles.card}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <img src={img} alt={title} />
      <div className={styles.cardContent}>
        <div className={styles.rating}>
          {Array(rating).fill(0).map((_, i) => (
            <img key={i} src={ratingCard} alt="star" />
          ))}
        </div>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      {isHovered && (
        <button className={styles.addToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;