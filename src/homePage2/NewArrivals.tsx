import React, { useState } from 'react'
import arrival1 from '../assets/arrival1.svg'
import arrival2 from '../assets/arrival2.svg'
import arrival3 from '../assets/arrival3.svg'
import arrival4 from '../assets/arrival4.svg'
import arrival5 from '../assets/arrival5.svg'
import rating from '../assets/rating.svg'
import styles from '../homePage2/NewArrivals.module.css'
import heartIcon from '../assets/heart.svg' // добавь иконку сердца в assets

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
}

const NewArrivals = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards: Card[] = [
    { id: 1, img: arrival1, rating: 5, title: 'Skullcandy - Crusher anc 2 wireless headphones', prise: '$299.99' },
    { id: 2, img: arrival2, rating: 5, title: 'Beats Studio Pro', prise: '$349.99' },
    { id: 3, img: arrival3, rating: 5, title: 'Sony - WH-CH720N Wireless Noise Canceling', prise: '$149.99' },
    { id: 4, img: arrival4, rating: 5, title: 'Skullcandy - Rail True Wireless Earbuds', prise: '$79.99' },
    { id: 5, img: arrival5, rating: 5, title: 'Beats Studio Pro', prise: '$224.99' }
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>New Arrivals</h2>
      <div className={styles.productList}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={styles.card}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.badges}>
              <span className={styles.newBadge}>NEW</span>
              <img src={heartIcon} alt="Add to wishlist" className={styles.heart} />
            </div>
            <img src={card.img} alt={card.title} className={styles.productImage} />
            {hoveredCard === card.id && (
              <button className={styles.addToCart}>Add to cart</button>
            )}
            <div className={styles.cardContent}>
              <div className={styles.rating}>
                {Array(card.rating).fill(0).map((_, i) => (
                  <img key={i} src={rating} alt="star" />
                ))}
              </div>
              <h3>{card.title}</h3>
              <p>{card.prise}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
