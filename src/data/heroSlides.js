import { endPoints } from "../config/apiConstants";
import image1 from "../assets/hero-image-1.jpg";
import image2 from "../assets/hero-image-2.jpg";
import image3 from "../assets/hero-image-3.jpg";

export const heroSlides = [
  {
    id: 1,
    image: image1,
    subHeading: "Dress Collection",
    heading: "Online Exclusive",
    link: endPoints.womenDresses,
  },
  {
    id: 2,
    image: image2,
    subHeading: "Look Exclusive",
    heading: "High-Top Design",
    link: endPoints.womenTops,
  },
  {
    id: 3,
    image: image3,
    subHeading: "Season Collection",
    heading: "Trendy Bags",
    link: endPoints.womenBags,
  },
];
