import "./App.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SpotlightOfferSection from "./components/SpotlightOfferSection";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      <Header handleOpenCart={handleOpenCart} />
      <CartDrawer isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
      <HeroSection />
      <SpotlightOfferSection />
    </>
  );
}

export default App;
