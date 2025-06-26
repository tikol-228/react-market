import styles from '../components/Arrivals.module.css';
import ratingCard from '../assets/ratingCard.svg';
import { useCart } from "../providers/CartProvider";

interface ProductCardProps {
  id: number;
  img: string;
  rating: number;
  title: string;
  price: string;
  isHovered: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  onClick?: () => void;
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
  onClick
}: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div
      className={styles.card}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
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
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
          onClick={e => {
            e.preventDefault();
            addToCart({
              id,
              img,
              title,
              price: Number(price.replace("$", "")),
            });
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;