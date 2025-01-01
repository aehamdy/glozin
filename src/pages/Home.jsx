import HorizontalScrollingText from "../components/HorizontalScrollingText";
import HeroSection from "../components/HeroSection";
import SpotlightOffersSection from "../components/SpotlightOffersSection";
import DealBannersSection from "../components/DealBannersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ShopByGramSection from "../components/ShopByGramSection";
import FeaturesSection from "../components/FeaturesSection";
import TopCollectionsSection from "../components/TopCollectionsSection";

export function Home() {
  return (
    <>
      <HorizontalScrollingText
        scrollingText={[
          "Great-Free returns product within 10 days",
          "Subscribe and get 10% off your first purchase",
        ]}
        mode="light"
      />
      <HeroSection />
      <SpotlightOffersSection />
      <TopCollectionsSection />
      <DealBannersSection />
      <TestimonialsSection showCustomerImage testimonialsCount={3} />
      <ShopByGramSection />
      <FeaturesSection />
    </>
  );
}
