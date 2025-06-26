import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Email from "../components/Email";
import Img from "../components/Img";
import styles from "./Shop.module.css";
import filter from "../assets/filter.svg";
import shop from "../assets/shop.svg";
import shop1 from "../assets/shop1.svg";
import shop2 from "../assets/shop2.svg";
import shop3 from "../assets/shop3.svg";
import shop4 from "../assets/shop4.svg";
import shop5 from "../assets/shop5.svg";
import shop6 from "../assets/shop6.svg";
import shop7 from "../assets/shop7.svg";
import shop8 from "../assets/shop8.svg";
import shop9 from "../assets/shop9.svg";
import { useCart } from "../providers/CartProvider";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productsSlice";
import AddProductModal from "../components/AddProductModal";
import Button from "../components/Button";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { setCartItems } = useCart();

  // Исходные карточки
  const initialCards = [
    { id: 1, name: "Loveseat Sofa", price: 89.99, oldPrice: 140.0, imageSrc: shop1, isNew: true, discountPercent: 50, rating: 5, category: "Living Room"},
    { id: 2, name: "Luxury Sofa", price: 219.0, oldPrice: 440.0, imageSrc: shop2, isNew: true, discountPercent: 50, rating: 5, category: "Living Room"},
    { id: 3, name: "Table Lamp", price: 39.0, imageSrc: shop3, isNew: true, discountPercent: 50, rating: 5, category: "Bedroom"},
    { id: 4, name: "White Drawer unit", price: 89.99, imageSrc: shop4, isNew: true, discountPercent: 50, rating: 5, category: "Bedroom"},
    { id: 5, name: "Black Tray table", price: 19.99, imageSrc: shop5, isNew: true, discountPercent: 50, rating: 5, category: "Kitchen"},
    { id: 6, name: "Lamp", price: 39.0, imageSrc: shop6, isNew: true, discountPercent: 50, rating: 5, category: "Bathroom"},
    { id: 7, name: "Light Beige Pillow", price: 9.99, imageSrc: shop7, isNew: true, discountPercent: 50, rating: 5, category: "Living Room"},
    { id: 8, name: "Table Lamp", price: 39.0, imageSrc: shop8, isNew: true, discountPercent: 50, rating: 5, category: "Outdoor"},
    { id: 9, name: "Bamboo Basket", price: 9.99, imageSrc: shop9, isNew: true, discountPercent: 50, rating: 5, category: "Bathroom"},
  ];

  const [cards, setCards] = useState(initialCards);

  const categories = ["All Rooms", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining", "Outdoor"];
  const priceRanges = ["All Price", "$0.00 - 99.99", "$100.00 - 199.99", "$200.00 - 299.99", "$300.00 - 399.99", "$400.00+"];

  useEffect(() => {
    const category = searchParams.get("category") || "All Rooms";
    const price = searchParams.get("price") || "All Price";
    setSelectedCategory(category);
    setSelectedPrice(price);
  }, [searchParams]);

  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    setSearchParams(params);
  };

  const handleDeleteCard = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  const handlePriceSelect = (range: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("price", range);
    setSearchParams(params);
  };

  const handleAddToCart = (product: { id: number; name: string; price: number; imageSrc: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.name,
          color: "Default",
          img: product.imageSrc,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  // Обработка добавления новой карточки из модалки
  const handleAddProduct = (newProduct: {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
    category: string;
    isNew?: boolean;
    oldPrice?: number;
    discountPercent?: number;
    isAdded: true;
    rating?: number;
  }) => {
    setCards((prevCards) => [...prevCards, newProduct]); // newProduct уже содержит isAdded: true
    dispatch(addProduct(newProduct)); // обновляем redux
    setIsOpen(false);
  };


  const handleOnCloseModal = () => {
    setIsOpen(false);
  };

  const getFilteredCards = () => {
    return cards.filter((card) => {
      const inCategory = selectedCategory === "All Rooms" || card.category === selectedCategory;
      let inPrice = true;

      if (selectedPrice === "$0.00 - 99.99") inPrice = card.price >= 0 && card.price < 100;
      else if (selectedPrice === "$100.00 - 199.99") inPrice = card.price >= 100 && card.price < 200;
      else if (selectedPrice === "$200.00 - 299.99") inPrice = card.price >= 200 && card.price < 300;
      else if (selectedPrice === "$300.00 - 399.99") inPrice = card.price >= 300 && card.price < 400;
      else if (selectedPrice === "$400.00+") inPrice = card.price >= 400;

      return inCategory && inPrice;
    });
  };

  return (
    <>
      <section className={styles.banner}>
        <Img className={styles.image} src={shop} alt="Shop Banner" />
        <div className={styles.overlay}>
          <div className={styles.breadcrumb}>Home &gt; Shop</div>
          <h1 className={styles.title}>Shop Page</h1>
          <p className={styles.subtitle}>Let’s design the place you always imagined.</p>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.shopCategories}>
          <div className={styles.filterBlock}>
            <h3>
              <img src={filter} alt="Filter" /> Filter
            </h3>
          </div>
          <div className={styles.filtersScroll}>
            <div className={styles.filterBlock}>
              <h3>CATEGORIES</h3>
              {categories.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    selectedCategory === category
                      ? `${styles.categoryLink} ${styles.activeCategory}`
                      : styles.categoryLink
                  }
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.filterBlock}>
              <h3>PRICE</h3>
              {priceRanges.map((range, index) => (
                <label
                  key={index}
                  className={
                    selectedPrice === range
                      ? `${styles.priceLabel} ${styles.activePrice}`
                      : styles.priceLabel
                  }
                >
                  <input
                    type="checkbox"
                    name="price"
                    value={range}
                    checked={selectedPrice === range}
                    onChange={() =>
                      setSelectedPrice(selectedPrice === range ? undefined : range)
                    }
                    className={styles.priceCheckbox}
                  />
                  {range}
                </label>
              ))}
              <Button onClick={() => setIsOpen(true)}>Add Product</Button>
              {isOpen && (
                <AddProductModal onClose={handleOnCloseModal} onAddProduct={handleAddProduct} />
              )}
            </div>
          </div>
        </div>

      <div className={styles.cardGrid}>
        {getFilteredCards().map((card) => (
          <div key={card.id} style={{ position: "relative" }}>
            <Card
              name={card.name}
              price={card.price}
              imageSrc={card.imageSrc}
              isNew={card.isNew}
              onDelete={() => {handleDeleteCard(card.id)}}
              discountPercent={card.discountPercent}
              onAddToCart={() => handleAddToCart({ id: card.id, name: card.name, price: card.price, imageSrc: card.imageSrc })}
            />
            {card.isAdded && (
            <button
              onClick={() => handleDeleteCard(card.id)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "rgba(0,0,0,0.5)",
                border: "none",
                color: "white",
                borderRadius: "50%",
                width: 24,
                height: 24,
                cursor: "pointer",
                fontWeight: "bold",
                lineHeight: 1,
              }}
              aria-label="Удалить карточку"
              title="Удалить"
            >
              ×
          </button>
        )}
        </div>
      ))}

      </div>
    </div>
      <Email />
    </>
  );
};

export default Shop;