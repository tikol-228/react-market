import React from "react";
import styles from "./Card.module.css";

type ProductCardProps = {
  name: string;
  price: number;
  imageSrc: string;
  isNew?: boolean;
  discountPercent?: number;
  onAddToCart?: () => void;
  onDelete?: () => void; // 👈 добавили
};

const Card: React.FC<ProductCardProps> = ({
  name,
  price,
  imageSrc,
  isNew = false,
  discountPercent = 0,
  onAddToCart,
  onDelete
}) => {
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

      <button className={styles.addToCart} onClick={onAddToCart}>
        Add to cart
      </button>

      <div className={styles.productInfo}>
        <div className={styles.stars}>★★★★★</div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Card;
