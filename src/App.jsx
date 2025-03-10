import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./pages/PageLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurStores from "./pages/OurStores";
import HelpCenter from "./pages/HelpCenter";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import { CheckoutProvider } from "./context/CheckoutContext";
import { UserDataProvider } from "./context/UserDataContext";
import OrderConfirmation from "./pages/OrderConfirmation";
import { QuickViewProvider } from "./context/QuickViewContext";
import CategoryProducts from "./components/CategoryProducts";
import { ToastProvider } from "./context/ToastContext";
import ROUTES from "./config/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <PageLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SHOP,
        element: <Shop />,
      },
      {
        path: ROUTES.PRODUCT_DETAILS,
        element: <ProductDetails />,
      },
      {
        path: ROUTES.CATEGORIES,
        element: <Categories />,
      },
      {
        path: ROUTES.CATEGORY_PRODUCT,
        element: <CategoryProducts />,
      },
      {
        path: ROUTES.SALE,
        element: <Sale />,
      },
      {
        path: ROUTES.WISHLIST,
        element: <Wishlist />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutUs />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactUs />,
      },
      {
        path: ROUTES.OUR_STORES,
        element: <OurStores />,
      },
      {
        path: ROUTES.HELP,
        element: <HelpCenter />,
      },
      {
        path: ROUTES.CHECKOUT,
        element: <Checkout />,
      },
      {
        path: ROUTES.ORDER_CONFIRMATION,
        element: <OrderConfirmation />,
      },
    ],
  },
]);

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <CheckoutProvider>
            <UserDataProvider>
              <QuickViewProvider>
                <RouterProvider router={router} />
              </QuickViewProvider>
            </UserDataProvider>
          </CheckoutProvider>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
