import menCollection from "../assets/category-men.webp";
import womenCollection from "../assets/category-women.webp";
import womenDividedCollection from "../assets/category-women-divided.webp";
import sportsCollection from "../assets/category-sports.webp";
import kidsCollection from "../assets/category-kids.webp";
import babyCollection from "../assets/category-baby.webp";
import homeCollection from "../assets/category-home.webp";


const categories = [
    {name: "dresses", image: menCollection, endPoint: `/womens-dresses`},
    {name: "tops", image: menCollection, endPoint: `/tops`},
    {name: "bags", image: womenCollection, endPoint: `/womens-bags`},
    {name: "jewellery", image: womenDividedCollection, endPoint: `/womens-jewellery`},
    {name: "shoes", image: sportsCollection, endPoint: `/womens-shoes`},
    {name: "fragrances", image: kidsCollection, endPoint: `/fragrances`},
    {name: "watches", image: babyCollection, endPoint: `/womens-watches`},
    {name: "beauty", image: homeCollection, endPoint: `/beauty`},
];

export default categories;