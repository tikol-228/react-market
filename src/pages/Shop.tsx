import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Email from "../components/Email";
import Img from "../components/Img";
import styles from "./Shop.module.css";
import filter from "../assets/filter.svg";
import shop from "../assets/shop.svg";
import grid from "../assets/grid.svg";
import list from "../assets/list.svg";
import row from "../assets/row.svg";
import masonry from "../assets/masonry.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, addToCart, Product, addProducts } from "../store/productsSlice";
import { createProduct, fetchProducts } from "../api/products";
import AddProductModal from "../components/AddProductModal";
import Button from "../components/Button";
import { RootState } from "../store";

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPrice, setSelectedPrice] = useState<string>("All Price");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Rooms");
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list" | "row" | "masonry">("grid");
  const [sortBy, setSortBy] = useState("default");

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    fetchProducts().then((res) => {
      dispatch(addProducts(res))
    })
  }, [dispatch]);

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

  const handlePriceSelect = (range: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("price", range);
    setSearchParams(params);
  };

  const handleAddToCart = (id: number) => {
    dispatch(addToCart(id));
  };

  const handleAddProduct = async (newProduct: Omit<Product, "id">) => {
    await createProduct(newProduct); // POST-запрос на сервер
    const updated = await fetchProducts(); // Получить обновлённый список
    dispatch(addProducts(updated)); // Обновить Redux
    setIsOpen(false);
  };

  const handleDeleteCard = (id: number) => {
    dispatch(removeProduct(id));
  };


  const getFilteredCards = () => {
    return products.filter(card => {
      const inCategory = selectedCategory === "All Rooms" || card.category === selectedCategory;
      let inPrice = true;
      if (selectedPrice === "$0.00 - 99.99") inPrice = card.price < 100;
      if (selectedPrice === "$100.00 - 199.99") inPrice = card.price >= 100 && card.price < 200;
      if (selectedPrice === "$200.00 - 299.99") inPrice = card.price >= 200 && card.price < 300;
      if (selectedPrice === "$300.00 - 399.99") inPrice = card.price >= 300 && card.price < 400;
      if (selectedPrice === "$400.00+") inPrice = card.price >= 400;
      return inCategory && inPrice;
    });
  };

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A-Z" },
    { value: "name-desc", label: "Name: Z-A" },
  ];

  const getSortedCards = (cards: Product[]) => {
    const sorted = [...cards];
    if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
    return sorted;
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
        {/* Сайдбар фильтров */}
        <div className={styles.shopCategories}>
          <div className={styles.filterBlock}>
            <h3>
              <Img src={filter} alt="Filter" /> Filter
            </h3>
          </div>
          <div className={styles.filtersScroll}>
            <div className={styles.filterBlock}>
              <h3>CATEGORIES</h3>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={
                    selectedCategory === cat
                      ? `${styles.categoryLink} ${styles.activeCategory}`
                      : styles.categoryLink
                  }
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className={styles.filterBlock}>
              <h3>PRICE</h3>
              {priceRanges.map((range, i) => (
                <label
                  key={i}
                  className={
                    selectedPrice === range
                      ? `${styles.priceLabel} ${styles.activePrice}`
                      : styles.priceLabel
                  }
                >
                  <input
                    type="checkbox"
                    checked={selectedPrice === range}
                    onChange={() => handlePriceSelect(range)}
                    className={styles.priceCheckbox}
                  />
                  {range}
                </label>
              ))}
              <Button onClick={() => setIsOpen(true)}>Add Product</Button>
              {isOpen && (
                <AddProductModal
                  onClose={() => setIsOpen(false)}
                  onAddProduct={handleAddProduct}
                />
              )}
            </div>
          </div>
        </div>

        {/* Основной контент: toolbar + карточки */}
        <div className={styles.contentBar}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              {selectedCategory}
            </div>
            <div className={styles.toolbarRight}>
              <label className={styles.sortLabel}>
                Sort by:
                <select
                  className={styles.sortSelect}
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <Button onClick={() => setView("grid")} className={view === "grid" ? styles.activeView : ""}>
                <Img src={grid} alt="Grid" />
              </Button>
              <Button onClick={() => setView("list")} className={view === "list" ? styles.activeView : ""}>
                <Img src={list} alt="List" />
              </Button>
              <Button onClick={() => setView("masonry")} className={view === "masonry" ? styles.activeView : ""}>
                <Img src={masonry} alt="Masonry" />
              </Button>
              <Button onClick={() => setView("row")} className={view === "row" ? styles.activeView : ""}>
                <Img src={row} alt="Row" />
              </Button>
            </div>
          </div>

          <div
            className={
              view === "grid"
                ? styles.cardGrid
                : view === "list"
                ? styles.cardList
                : view === "row"
                ? styles.cardRow
                : styles.cardMasonry
            }
          >
            {getSortedCards(getFilteredCards()).length > 0 ? (
              getSortedCards(getFilteredCards()).map(card => (
                <div key={card.id} className={styles.cardWrapper}>
                  <Card
                    name={card.name}
                    price={card.price}
                    imageSrc={card.imageSrc}
                    isNew={card.isNew}
                    discountPercent={card.discountPercent}
                    id={card.id}
                    onAddToCart={() => handleAddToCart(card.id)}
                    onDelete={() => handleDeleteCard(card.id)}
                  />
                </div>
              ))
            ) : 
              <h2>No products found.</h2>
            }
          </div>
        </div>
      </div>

      <Email />
    </>
  );
};

export default Shop;