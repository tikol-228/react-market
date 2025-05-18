import './App.css';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import HomePage1 from './pages/Furniture';
import HomePage2 from './pages/Technique';
import Auth from './pages/Auth';
import { useState } from 'react';
import FlyOutCart from './components/FlyOutCart';
import Cart from './pages/Cart';
import HomePage3 from './pages/Golf';
import ContactUs2 from './pages/ContactUs';
import ProductPage from './pages/ProductPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Shop from './pages/Shop';
import ClothesShop from './pages/ClothesShop';
import router from './providers/router';

interface Card {
  id: number;
  img: string;
  rating: number;
  title: string;
  prise: string;
  quantity: number; // Добавлено поле quantity для управления количеством
}

function App() {
  const [cartItems, setCartItems] = useState<Card[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Функция для добавления товара в корзину
  const handleBuy = (item: Card) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  // Функция для закрытия корзины
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Функция для оформления заказа
  const handleCheckout = () => {
    alert('Checkout not implemented yet!');
  };

  return (
    <>

    <RouterProvider router={router}/>

      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/HomePage1" element={<HomePage1 />} />
          <Route path="/homePage2" element={<HomePage2/>} />
          <Route path='/HomePage3' element={<HomePage3/>}/>
          <Route path='/ContactUs2' element={<ContactUs2/>}/>
          <Route path="/product-page" element={<ProductPage/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog-post" element={<BlogPost/>}/>
          <Route path='/clothes-shop' element={<ClothesShop/>}/>
          <Route path="shop-page" element={<Shop/>}/>
        </Routes>

        {isCartOpen && (
          <FlyOutCart
            onClose={handleCloseCart}
            onBuy={handleCheckout}
            items={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Router>

    </>
  );
}

export default App;
