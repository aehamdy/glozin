import menCollection from "../assets/category-men.webp";
import womenCollection from "../assets/category-women.webp";
import womenDividedCollection from "../assets/category-women-divided.webp";
import sportsCollection from "../assets/category-sports.webp";
import kidsCollection from "../assets/category-kids.webp";
import babyCollection from "../assets/category-baby.webp";
import homeCollection from "../assets/category-home.webp";
import { productCategoryKey } from "../config/apiConstants";


const collections = [
    {name: "dresses", image: menCollection, endPoint: `${productCategoryKey}womens-dresses`},
    {name: "tops", image: menCollection, endPoint: `${productCategoryKey}tops`},
    {name: "bags", image: womenCollection, endPoint: `${productCategoryKey}womens-bags`},
    {name: "jewellery", image: womenDividedCollection, endPoint: `${productCategoryKey}womens-jewellery`},
    {name: "shoes", image: sportsCollection, endPoint: `${productCategoryKey}womens-shoes`},
    {name: "fragrances", image: kidsCollection, endPoint: `${productCategoryKey}fragrances`},
    {name: "watches", image: babyCollection, endPoint: `${productCategoryKey}womens-watches`},
    {name: "beauty", image: homeCollection, endPoint: `${productCategoryKey}beauty`},
];

export default collections;