import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Cart.module.css';
import cartCross from '../assets/cartCross.svg';
import Button from '../components/Button';
import Img from '../components/Img';
import Title from '../components/Title';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addToCart } from '../store/productsSlice';

interface CartItem {
  id: number;
  title: string;
  color?: string;
  img: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Получаем все товары и id товаров в корзине из Redux
  const products = useSelector((state: RootState) => state.products.products);
  const cartProductIds = useSelector((state: RootState) => state.products.cartProductIds);

  // Проверка: выводим содержимое корзины в консоль при каждом рендере
  React.useEffect(() => {
    console.log("cartProductIds:", cartProductIds);
    console.log("cartItems:", products.filter(product => cartProductIds.includes(product.id)));
  }, [cartProductIds, products]);

  // Формируем массив товаров в корзине
  const cartItems: CartItem[] = products
    .filter(product => cartProductIds.includes(product.id))
    .map(product => ({
      id: product.id,
      title: product.name,
      color: product.color,
      img: product.imageSrc,
      price: product.price,
      quantity: 1, // если нужна поддержка количества, доработайте логику
    }));

  // Удалить товар из корзины
  const removeItem = (item: CartItem) => {
    dispatch(addToCart(item.id)); // toggle: убирает, если есть
  };

  // Для количества (если реализовано в Redux, иначе убрать)
  const minusItem = (item: CartItem) => {
    // Реализуйте логику уменьшения количества через Redux, если нужно
  };

  const plusItem = (item: CartItem) => {
    // Реализуйте логику увеличения количества через Redux, если нужно
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 0; // Пока только Free Shipping
  const total = subtotal + shippingCost;

  return (
    <>
      <div className={styles.cartContainer}>
        <Title type={2} className={styles.cartText}>Cart</Title>
        <div className={styles.cartGrid}>
          {/* Product List */}
          <div className={styles.cartLeft}>
            <div className={styles.cartHeader}>
              <Title type={5}>Product</Title>
              <Title type={5}>Quantity</Title>
              <Title type={5}>Price</Title>
              {cartItems.map((item: CartItem) => (
                <div key={item.id} className={styles.cartItemRow}>
                  <div className={styles.productInfo}>
                    <Img src={item.img} className={styles.cartFlyImg} alt={item.title} />
                    <div>
                      <Title type={3}>{item.title}</Title>
                      <p>Color: {item.color}</p>
                      <Button onClick={() => removeItem(item)}
                        className={styles.cartCrossBtn}><img src={cartCross}/>Remove</Button>
                    </div>
                  </div>
                  <div className={styles.quantityControls}>
                    <Button onClick={() => minusItem(item)}>-</Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => plusItem(item)}>+</Button>
                  </div>
                  <p>${item.price.toFixed(2)}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              {/* Coupon Input */}
              <div className={styles.coupon}>
                <Title type={3}>Have a coupon?</Title>
                <p>Add your code for an instant cart discount</p>
                <Input
                  type="text"
                  placeholder="Coupon Code"
                  onChange={() => {}}
                />
                <Button>Apply</Button>
              </div>
            </div>
          </div>
          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <Title type={3}>Cart summary</Title>
            <label><input type="radio" defaultChecked /> Free shipping — $0.00</label>
            <label><input type="radio" /> Express shipping — $15.00</label>
            <label><input type="radio" /> Pick up — $12.00</label>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <strong>Total</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <Button
              className={styles.checkoutBtn}
              onClick={() => navigate('/check-out')}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
