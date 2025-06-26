import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
import Technique from "../pages/Technique";
import ClothesShop from "../pages/ClothesShop";
import ContactUs2 from "../pages/ContactUs";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Auth from "../pages/Auth";
import Furniture from "../pages/Furniture";
import ProtectedRoutes from "./ProtectedRoutes";
import Account from "../pages/Account";
import ProductDetails from "../pages/ProductDetails";

const ProtectedLayout = () => (
  <ProtectedRoutes>
    <Outlet />
  </ProtectedRoutes>
);

const router = createBrowserRouter([
  { path: 'auth', element: <Auth /> },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
        children: [
          { index: true, element: <Navigate to="/auth" replace /> },
          { path: 'home', element: <Furniture /> },
          { path: 'tecnique', element: <Technique /> },
          { path: 'clothes-shop', element: <ClothesShop /> },
          { path: 'contact-us', element: <ContactUs2 /> },
          { path: 'shop-page', element: <Shop /> },
          { path: 'my-account', element: <Account /> },
          { path: 'product/:id', element: <ProductDetails /> },
          { path: 'post', element: <Blog /> },
          { path: 'blog-post', element: <BlogPost /> },
          { path: 'cart', element: <Cart /> },
          { path: 'tech', element: <Technique /> },
          { path: 'check-out', element: <CheckOut /> },
        ]
      },
    ],
  },
  { path: "*", element: <Auth /> },
]);

export default router;