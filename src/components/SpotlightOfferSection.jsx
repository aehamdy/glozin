import SpotlightOfferBanner from "./SpotlightOfferBanner";
import spotlightImage1 from "../assets/spotlight-offer-image-1.jpg";
import spotlightImage2 from "../assets/spotlight-offer-image-2.jpg";
import spotlightImage3 from "../assets/spotlight-offer-image-3.jpg";

const banners = [
  {
    id: 1,
    image: spotlightImage1,
    subHeading: "Save 30-50% Blazers",
    heading: "Colour Spotlight",
    textContent: "In-store! Limited time offer",
  },
  {
    id: 2,
    image: spotlightImage2,
    subHeading: "Sale up to 75% off",
    heading: "Coats Collection",
    textContent: "From $175. Do not miss!",
  },
  {
    id: 3,
    image: spotlightImage3,
    subHeading: "Save 10-30% Dresses",
    heading: "Everyday Luxury",
    textContent: "In-store! Limited time offer",
  },
];

function SpotlightOfferSection() {
  return (
    <section className="grid grid-col-1 md:grid-cols-3 justify-items-center gap-4 lg:gap-8 my-8 lg:px-5">
      {banners.map((banner, index) => (
        <SpotlightOfferBanner key={index} banner={banner} />
      ))}
    </section>
  );
}
export default SpotlightOfferSection;
