import { useState } from "react";
import Header from "../components/Header";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import FooterBottomBar from "../components/FooterBottomBar";
import { Outlet } from "react-router-dom";

function PageLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <div>
      <Header handleOpenCart={handleOpenCart} />
      <CartDrawer isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
      <Outlet />
      <Footer />
      <FooterBottomBar />
    </div>
  );
}
export default PageLayout;
