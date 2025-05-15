import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Cart.module.css';
import cartCross from '../assets/cartCross.svg';
import { useCart } from '../providers/CartProvider';
import Button from '../components/Button';
import Img from '../components/Img';
import Title from '../components/Title';
import Input from '../components/Input';

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

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <Title tipe={2} className={styles.cartText}>Cart</Title>

        <div className={styles.cartGrid}>
          {/* Product List */}
          <div className={styles.cartLeft}>
            <div className={styles.cartHeader}>
              <Title tipe={5}>Product</Title>
              <Title tipe={5}>Quantity</Title>
              <Title tipe={5}>Price</Title>
              <Title>Subtotal</Title>
            </div>

            {cartItems.map((item: CartItem) => (
              <div key={item.id} className={styles.cartItemRow}>
                <div className={styles.productInfo}>
                  <Img src={item.img} className={styles.cartFlyImg} alt={item.title} />
                  <div>
                    <Title tipe={3}>{item.title}</Title>
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
              <Title tipe={3}>Have a coupon?</Title>
              <p>Add your code for an instant cart discount</p>
              <Input type="text" placeholder="Coupon Code" />
              <Button>Apply</Button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <Title tipe={3}>Cart summary</Title>
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
            <Button className={styles.checkoutBtn}>Checkout</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
