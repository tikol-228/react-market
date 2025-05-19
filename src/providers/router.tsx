import { createBrowserRouter } from "react-router-dom";
import HomePage1 from "../pages/Furniture";
import HomeLayout from "../pages/HomeLayout";
import Technique from "../pages/Technique";
import ClothesShop from "../pages/ClothesShop";
import ContactUs2 from "../pages/ContactUs";
import Shop from "../pages/Shop";
import ProductPage from "../pages/ProductPage";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
    {
     path:'/',
     element:<HomeLayout/>,
     children:[
        {index:true, element:<HomePage1/>},
        {path:'tecnique', element:<Technique/>},
        {path:'clothes-shop', element:<ClothesShop/>},
        {path:'contact-us', element:<ContactUs2/>},
        {path:'shop-page', element:<Shop/>},
        {path:'product-page', element:<ProductPage/>},
        {path:'post', element:<Blog/>},
        {path:'blog-post', element:<BlogPost/>},
        {path:'cart', element:<Cart/>},
        {path:'tech', element:<Technique/>},
        {
            path:'',
            element:<ProtectedRoutes/>,
            children:[
                {path:'my-account', element:<Account/>}
            ]
        }
     ]
    },
])

export default router;