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
import Collections from "./pages/Collections";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import { CheckoutProvider } from "./context/CheckoutContext";
import { UserDataProvider } from "./context/UserDataContext";

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
        path: "/collections",
        element: <Collections />,
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
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <CheckoutProvider>
          <UserDataProvider>
            <RouterProvider router={router} />
          </UserDataProvider>
        </CheckoutProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
