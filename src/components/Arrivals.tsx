import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow1 from "../assets/arrow1.svg";
import cardImg1 from "../assets/cardImg1.jpg";
import cardImg2 from "../assets/cardImg2.jpg";
import cardImg3 from "../assets/cardImg3.jpg";
import cardImg4 from "../assets/cardImg4.jpg";
import cardImg5 from "../assets/cardImg5.jpg";
import cardImg6 from "../assets/cardImg6.jpg";
import ProductCard from "../components/ProductCard";

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
}

const Arrivals = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const cards: Card[] = [
    { id: 1, img: cardImg1, rating: 5, title: "Loveseat Sofa", prise: "$199.00" },
    { id: 2, img: cardImg2, rating: 5, title: "Table Lamp", prise: "$24.99" },
    { id: 3, img: cardImg3, rating: 5, title: "Beige Table Lamp", prise: "$24.99" },
    { id: 4, img: cardImg4, rating: 5, title: "Bamboo basket", prise: "$24.99" },
    { id: 5, img: cardImg5, rating: 5, title: "Toasted", prise: "$224.99" },
    { id: 6, img: cardImg6, rating: 5, title: "Tray Table", prise: "$199.00" },
  ];

  const handleCardClick = (cardId: number) => {
    if (cardId === 6) {
      navigate("/product-page");
    }
  };

  return (
    <section className="pt-12">
      <div className="flex justify-between px-6 sm:px-24 items-center font-poppins">
        <h2 className="text-3xl font-semibold leading-tight">New<br />Arrivals</h2>
        <Link to="#" className="text-lg font-semibold text-[#191C1F] hover:text-[#FF5C00] flex items-center gap-2">
          More Products
          <img src={arrow1} alt="arrow icon" className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex gap-8 mt-10 overflow-x-auto px-6 sm:px-24 pb-4 scroll-smooth hide-scrollbar">
        {cards.map((card) => (
          <Link key={card.id} to={card.title === "Loveseat Sofa" ? "/product-page" : "#"}>
            <ProductCard
              id={card.id}
              img={card.img}
              rating={card.rating}
              title={card.title}
              price={card.prise}
              isHovered={hoveredCard === card.id}
              onMouseEnter={setHoveredCard}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.id)}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Arrivals;
