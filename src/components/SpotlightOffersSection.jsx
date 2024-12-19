import SpotlightOfferBanner from "./SpotlightOfferBanner";
import spotlightImage1 from "../assets/spotlight-offer-image-1.jpg";
import spotlightImage2 from "../assets/spotlight-offer-image-2.jpg";
import spotlightImage3 from "../assets/spotlight-offer-image-3.jpg";

const banners = [
  {
    id: 1,
    image: spotlightImage1,
    mainText: "Colour Spotlight",
    subText: "Save 30-50% Blazers",
    text: "In-store! Limited time offer",
  },
  {
    id: 2,
    image: spotlightImage2,
    mainText: "Coats Collection",
    subText: "Sale up to 75% off",
    text: "From $175. Do not miss!",
  },
  {
    id: 3,
    image: spotlightImage3,
    mainText: "Everyday Luxury",
    subText: "Save 10-30% Dresses",
    text: "In-store! Limited time offer",
  },
];

function SpotlightOffersSection() {
  return (
    <section className="grid grid-col-1 md:grid-cols-3 justify-items-center gap-4 lg:gap-8 mb-vertical-spacing lg:px-5">
      {banners.map((banner, index) => (
        <SpotlightOfferBanner key={index} banner={banner} />
      ))}
    </section>
  );
}
export default SpotlightOffersSection;
