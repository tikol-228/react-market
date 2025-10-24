import { createBrowserRouter, Outlet } from "react-router-dom";
import HomeLayout from "../pages/HomeLayout";
// import Technique from "../pages/Technique";
// import ClothesShop from "../pages/ClothesShop";
import ContactUs2 from "../pages/ContactUs";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth";
import Furniture from "../pages/Furniture";
import ProtectedRoutes from "./ProtectedRoutes";
import Account from "../pages/Account";
import Categories from "../components/Categories";

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
          { index: true, element: <Furniture /> }, // теперь "/" ведёт на Furniture
          // { path: 'tecnique', element: <Technique /> },
          // { path: 'clothes-shop', element: <ClothesShop /> },
          { path: 'contact-us', element: <ContactUs2 /> },
          { path: 'shop-page', element: <Shop /> },
          {path: 'categories', element: <Categories/>},
          {path: 'about-us', element: <Furniture/>},
          { path: 'my-account', element: <Account /> },
        //   { path: 'product/:id', element: <ProductDetails /> },
        //   { path: 'post', element: <Blog /> },
        //   { path: 'blog-post', element: <BlogPost /> },
          { path: 'cart', element: <Cart /> },
        //   { path: 'tech', element: <Technique /> },
        //   { path: 'check-out', element: <CheckOut /> },
        ]
      },
    ],
  },
  { path: "*", element: <Furniture /> },
]);

export default router;