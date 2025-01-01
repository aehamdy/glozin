import menCollection from "../assets/category-men.webp";
import womenCollection from "../assets/category-women.webp";
import womenDividedCollection from "../assets/category-women-divided.webp";
import sportsCollection from "../assets/category-sports.webp";
import kidsCollection from "../assets/category-kids.webp";
import babyCollection from "../assets/category-baby.webp";
import homeCollection from "../assets/category-home.webp";

const collections = [
    {
        name: "Men",
        image: menCollection,
        link: "/men-collection"
    },
    {
        name: "Women",
        image: womenCollection,
        link: "/women-collection"
    },
    {
        name: "Women Divided",
        image: womenDividedCollection,
        link: "/women-divided-collection"
    },
    {
        name: "Sports Wear",
        image: sportsCollection,
        link: "/sportswear-collection"
    },
    {
        name: "Kids",
        image: kidsCollection,
        link: "/kids-collection"
    },
    {
        name: "Baby",
        image: babyCollection,
        link: "/baby-collection"
    },
    {
        name: "Home",
        image: homeCollection,
        link: "/home-collection"
    },
];

export default collections;