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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: `/categories/:categoryName`,
        element: <CategoryProducts />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/ourstores",
        element: <OurStores />,
      },
      {
        path: "/help",
        element: <HelpCenter />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-confirmation",
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
