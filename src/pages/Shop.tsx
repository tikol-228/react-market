import Card from "../components/Card";
import Email from "../components/Email";
import Footer from "../components/Footer";
import Header from "../components/Header";
import shop1 from '../assets/shop1.svg';
import shop2 from '../assets/shop2.svg';
import shop3 from '../assets/shop3.svg';
import shop4 from '../assets/shop4.svg';
import shop5 from '../assets/shop5.svg';
import shop6 from '../assets/shop6.svg';
import shop7 from '../assets/shop7.svg';
import shop8 from '../assets/shop8.svg';
import shop9 from '../assets/shop9.svg';
import shop from '../assets/shop.svg';
import styles from './Shop.module.css';
import filter from '../assets/filter.svg';
import Img from "../components/Img";
import Link from "../components/Link";

const Shop = () => {
  const cards = [
    {
      id: 1,
      name: "Loveseat Sofa",
      price: 89.99,
      oldPrice: 140.00,
      imageSrc: shop1,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 2,
      name: "Luxury Sofa",
      price: 219.00,
      oldPrice: 440.00,
      imageSrc: shop2,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 3,
      name: "Table Lamp",
      price: 39.00,
      imageSrc: shop3,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 4,
      name: "White Drawer unit",
      price: 89.99,
      imageSrc: shop4,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 5,
      name: "Black Tray table",
      price: 19.99,
      imageSrc: shop5,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 6,
      name: "Lamp",
      price: 39.00,
      imageSrc: shop6,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 7,
      name: "Light Beige Pillow",
      price: 9.99,
      imageSrc: shop7,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 8,
      name: "Table Lamp",
      price: 39.00,
      imageSrc: shop8,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
    {
      id: 9,
      name: "Bamboo Basket",
      price: 9.99,
      imageSrc: shop9,
      isNew: true,
      discountPercent: 50,
      rating: 5,
    },
  ];

  const categories = [
    "All Rooms",
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Bathroom",
    "Dining",
    "Outdoor"
  ];

  const priceRanges = [
    "All Price",
    "$0.00 - 99.99",
    "$100.00 - 199.99",
    "$200.00 - 299.99",
    "$300.00 - 399.99",
    "$400.00+"
  ];

  return (
    <>
      <Header />
      <section className={styles.banner}>
        <Img
          className={styles.image}
          src={shop}
          alt="Shop Banner"
        />
        <div className={styles.overlay}>
          <div className={styles.breadcrumb}>Home &gt; Shop</div>
          <h1 className={styles.title}>Shop Page</h1>
          <p className={styles.subtitle}>Let’s design the place you always imagined.</p>
        </div>
        <div className={styles.shopCategories}>
          <div>
            <h3><img src={filter} alt="Filter" /> Filter</h3>
          </div>
          <div>
            <h3>CATEGORIES</h3>
            {categories.map((category, index) => (
              <Link key={index} href="#">{category}</Link>
            ))}
          </div>
          <div>
            <h3>PRICE</h3>
            {priceRanges.map((range, index) => (
              <p key={index}>
                {range}<input type="checkbox" />
              </p>
            ))}
          </div>
        </div>
      </section>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            price={card.price}
            imageSrc={card.imageSrc}
            isNew={card.isNew}
            discountPercent={card.discountPercent}
          />
        ))}
      </div>
      <Email />
      <Footer />
    </>
  );
};

export default Shop;