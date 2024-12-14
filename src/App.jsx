import "./App.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SpotlightOfferSection from "./components/SpotlightOfferSection";
import HorizontalScrollingText from "./components/HorizontalScrollingText";
import SectionHeader from "./components/SectionHeader";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <>
      <Header handleOpenCart={handleOpenCart} />
      <CartDrawer isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
      <HorizontalScrollingText />
      <HeroSection />
      <SpotlightOfferSection />
      <SectionHeader
        title="Top Collections"
        subtitle="Express your style with our standout collection—fashion meets sophistication."
      />
    </>
  );
}

export default App;
