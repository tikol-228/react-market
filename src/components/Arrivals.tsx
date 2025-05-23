// import Link from "./Link";
import arrow1 from '../assets/arrow1.svg';
import cardImg1 from '../assets/cardImg1.svg';
import cardImg2 from '../assets/cardImg2.svg';
import cardImg3 from '../assets/cardImg3.svg';
import cardImg4 from '../assets/cardImg4.svg';
import cardImg5 from '../assets/cardImg5.svg';
import cardImg6 from '../assets/cardImg6.svg';
import styles from './Arrivals.module.css';
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate, Link } from 'react-router-dom';


// Интерфейс для карточки товара
interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
}

const Arrivals = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards: Card[] = [
    { id: 1, img: cardImg1, rating: 5, title: 'Loveseat Sofa', prise: '$199.00' },
    { id: 2, img: cardImg2, rating: 5, title: 'Table Lamp', prise: '$24.99' },
    { id: 3, img: cardImg3, rating: 5, title: 'Beige Table Lamp', prise: '$24.99' },
    { id: 4, img: cardImg4, rating: 5, title: 'Bamboo basket', prise: '$24.99' },
    { id: 5, img: cardImg5, rating: 5, title: 'Toasted', prise: '$224.99' },
    { id: 6, img: cardImg6, rating: 5, title: 'Tray Table', prise: '$199.00' },
  ];

  const navigate = useNavigate(); // Хук для навигации

  const handleCardClick = (cardId: number) => {
    if (cardId === 6) {
      navigate('/product-page'); // Переход на страницу ProductPage
    }
  };

  return (
    <>
      <div>
        <div className={styles.arrivalText}>
          <h2>New<br />Arrivals</h2>
          <Link href='#' className={styles.arrivalLink}>More Products <img src={arrow1} alt="arrow" /></Link>
        </div>

        <div className={styles.productCard}>
          {cards.map((card) => (
            <Link key={card.id} to={card.title === "Loveseat Sofa" ? "/product-page" : "#"}>
              <ProductCard
                key={card.id}
                id={card.id}
                img={card.img}
                rating={card.rating}
                title={card.title}
                price={card.prise}
                isHovered={hoveredCard === card.id}
                onMouseEnter={setHoveredCard}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(card.id)} // Передаем ID карточки в обработчик клика
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Arrivals;