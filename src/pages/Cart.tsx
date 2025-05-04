import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import Header from '../homePage1/Header';
import Footer from '../homePage1/Footer';
import styles from './Cart.module.css';
import cartCross from '../assets/cartCross.svg';
import { useCart } from '../providers/CartProvider';

interface CartItem {
  id: number;
  title: string;
  color: string;
  img: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { cartItems, setCartItems } = useCart();

  const minusItem = (item: CartItem) => {
    setCartItems((prev: CartItem[]) =>
      prev
      .map((ci: CartItem) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
      )
      .filter((ci: CartItem) => ci.quantity > 0)
    );
  };

  const plusItem = (item: CartItem) => {
    setCartItems((prev: any[]) =>
      prev.map((ci: { id: number; quantity: number; }) =>
        ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
      )
    );
  };

  const removeItem = (item: CartItem) => {
    setCartItems((prev: CartItem[]) => prev.filter((ci: CartItem) => ci.id !== item.id));
  };

  const subtotal = cartItems.reduce((sum: number, item: { price: number; quantity: number; }) => sum + item.price * item.quantity, 0);
  const shippingCost = 0; // Пока только Free Shipping
  const total = subtotal + shippingCost;

  const handleAddItem = (item: CartItem) => {

  }

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <h2 className={styles.cartText}>Cart</h2>

        <div className={styles.cartGrid}>
          {/* Product List */}
          <div className={styles.cartLeft}>
            <div className={styles.cartHeader}>
              <h5>Product</h5>
              <h5>Quantity</h5>
              <h5>Price</h5>
              <h5>Subtotal</h5>
            </div>

            {cartItems.map((item: CartItem) => (
              <div key={item.id} className={styles.cartItemRow}>
                <div className={styles.productInfo}>
                  <img src={item.img} className={styles.cartFlyImg} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Color: {item.color}</p>
                    <button onClick={() => removeItem(item)}
                    className={styles.cartCrossBtn}><img src={cartCross}/>Remove</button>
                  </div>
                </div>
                <div className={styles.quantityControls}>
                  <button onClick={() => minusItem(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => plusItem(item)}>+</button>
                </div>
                <p>${item.price.toFixed(2)}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            {/* Coupon Input */}
            <div className={styles.coupon}>
              <h3>Have a coupon?</h3>
              <p>Add your code for an instant cart discount</p>
              <input type="text" placeholder="Coupon Code" />
              <button>Apply</button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <h3>Cart summary</h3>
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
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
