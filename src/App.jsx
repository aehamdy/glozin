import "./App.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { useState } from "react";
import HorizontalScrollingText from "./components/HorizontalScrollingText";
import HeroSection from "./components/HeroSection";
import SpotlightOffersSection from "./components/SpotlightOffersSection";
import DealBannersSection from "./components/DealBannersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ShopByGramSection from "./components/ShopByGramSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterBottomBar from "./components/FooterBottomBar";
import Footer from "./components/Footer";
import TopCollectionsSection from "./components/TopCollectionsSection";

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
      <TopCollectionsSection />
      <DealBannersSection />
      <TestimonialsSection />
      <ShopByGramSection />
      <FeaturesSection />
      <Footer />
      <FooterBottomBar />
    </>
  );
}

export default App;
