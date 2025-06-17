import spotlightImage1 from "../assets/spotlight-offer-image-1.jpg";
import spotlightImage2 from "../assets/spotlight-offer-image-2.jpg";
import spotlightImage3 from "../assets/spotlight-offer-image-3.jpg";
import { endPoints } from "../config/apiConstants";

export const spotlightBanners = [
  {
    id: 1,
    image: spotlightImage1,
    mainText: "Jewellery Spotlight",
    subText: "Save 30-50% Jewellery",
    text: "In-store! Limited time offer",
    link: endPoints.womenJewellery,
  },
  {
    id: 2,
    image: spotlightImage2,
    mainText: "Fragrances Spotlight",
    subText: "Sale up to 75% off",
    text: "From $175. Do not miss!",
    link: endPoints.womenFragrances,
  },
  {
    id: 3,
    image: spotlightImage3,
    mainText: "Beauty Spotlight",
    subText: "Save 10-30% Makeup",
    text: "In-store! Limited time offer",
    link: endPoints.womenBeauty,
  },
];
