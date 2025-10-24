import React from "react";
import styles from "./CheckOut.module.css";

const CheckOut: React.FC = () => {
  const cartItems: any[] = []; // Replace this with your actual cart items from state management

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = 0;
  const total = subtotal + shippingCost;

  console.log("Cart Items:", cartItems);
  
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formSection}>
        <h1 className={styles.title}>Check Out</h1>

        {/* Contact Info */}
        <div className={styles.block}>
          <h2 className={styles.heading}>Contact information</h2>
          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="First name" />
            <input className={styles.input} type="text" placeholder="Last name" />
          </div>
          <input className={styles.input} type="tel" placeholder="Phone number" />
          <input className={styles.input} type="email" placeholder="Email address" />
        </div>

        {/* Shipping Address */}
        <div className={styles.block}>
          <h2 className={styles.heading}>Shipping Address</h2>
          <input className={styles.input} type="text" placeholder="Street Address" />
          <select className={styles.input}>
            <option>Country</option>
          </select>
          <input className={styles.input} type="text" placeholder="Town / City" />
          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="State" />
            <input className={styles.input} type="text" placeholder="Zip Code" />
          </div>
          <label className={styles.checkbox}>
            <input type="checkbox" />
            Use a different billing address
          </label>
        </div>

        {/* Payment Method */}
        <div className={styles.block}>
          <h2 className={styles.heading}>Payment method</h2>
          <label className={styles.radio}>
            <input type="radio" name="payment" defaultChecked />
            Pay by Card Credit
          </label>
          <label className={styles.radio}>
            <input type="radio" name="payment" />
            Paypal
          </label>
          <input className={styles.input} type="text" placeholder="Card number" />
          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="MM/YY" />
            <input className={styles.input} type="text" placeholder="CVC code" />
          </div>
        </div>

        <button className={styles.placeOrder}>Place Order</button>
      </div>

      {/* Order Summary */}
      <div className={styles.summarySection}>
        <h2 className={styles.heading}>Order summary</h2>
        <div className={styles.orderItem}>
          {cartItems.map((item) => (
            <div className={styles.itemInfo} key={item.id}>
              <p>
                {item.title}
                {item.quantity > 1 && <span> x{item.quantity}</span>}
              </p>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className={styles.coupon}>
          <input className={styles.input} type="text" placeholder="Input" />
          <button className={styles.applyBtn}>Apply</button>
        </div>
        {/* Скидка только если есть */}
        {/* <p className={styles.discount}>- $25.00 (Remove)</p> */}
        <div className={styles.totalLine}>
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className={styles.totalLine}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.totalLineBold}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;