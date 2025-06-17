import dealBanner1 from "../assets/deal-banner-1.webp";
import dealBanner2 from "../assets/deal-banner-2.webp";
import { endPoints } from "../config/apiConstants";

export const deals = [
  {
    id: 1,
    image: dealBanner1,
    mainText: "Save! 30-50%Off",
    subText: "Today-White friday",
    button: "Shop Save",
    link: endPoints.womenTops,
  },
  {
    id: 2,
    image: dealBanner2,
    mainText: "High-Top Shoes",
    subText: "Save 30%-50% Clothing",
    button: "Shop Save",
    link: endPoints.womenShoes,
  },
];
