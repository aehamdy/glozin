import "./App.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";
import HorizontalScrollingText from "./components/HorizontalScrollingText";
import HeroSection from "./components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import SpotlightOffersSection from "./components/SpotlightOffersSection";
import DealBannersSection from "./components/DealBannersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ShopByGramSection from "./components/ShopByGramSection";
import FeaturesSection from "./components/FeaturesSection";

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
      <SpotlightOffersSection />
      <SectionHeader
        title="Top Collections"
        subtitle="Express your style with our standout collection—fashion meets sophistication."
      />
      <DealBannersSection />
      <SectionHeader
        title="Customer Say!"
        subtitle="Customers love our products and we always strive to please them all."
      />
      <TestimonialsSection />
      <SectionHeader
        title="Shop by Gram"
        subtitle="Inspire and let yourself be inspired, from one unique fashion to another."
      />
      <ShopByGramSection />
      <FeaturesSection />
    </>
  );
}

export default App;
