import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Button from "./Button";
import styles from "./Card.module.css";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  onAddToCart?: () => void;
  isNew?: boolean;
  discountPercent?: number;
  onDelete?: () => void;
};

const Card: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageSrc,
  isNew = false,
  discountPercent = 0,
  onAddToCart,
  onDelete
}) => {
  // const dispatch = useDispatch();
  const cartProductIds = useSelector((state: RootState) => state.products.cartProductIds);

  const isInCart = cartProductIds.includes(id);

  return (
    <div className={styles.productCard}>
      <div className={styles.badgeContainer}>
        {isNew && <span className={styles.badgeNew}>NEW</span>}
        {discountPercent > 0 && (
          <span className={styles.badgeSale}>-{discountPercent}%</span>
        )}
        <button className={styles.wishlistButton}>♡</button>
        {onDelete && (
          <button
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
            onClick={onDelete}
          >
            tikol
          </button>
        )}
      </div>

      <img src={imageSrc} alt={name} className={styles.productImage} />

      <Button
        className={`${styles.addToCart} ${isInCart ? styles.active : ""}`}
        onClick={onAddToCart}
      >
        {isInCart ? "Remove from cart" : "Add to cart"}
      </Button>

      <div className={styles.productInfo}>
        <div className={styles.stars}>★★★★★</div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Card;
