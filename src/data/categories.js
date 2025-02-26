import dressesCategory from "../assets/categories/dresses-category.webp";
import topsCategory from "../assets/categories/tops-category.webp";
import bagsCategory from "../assets/categories/bags-category.webp";
import jewelleryCateogry from "../assets/categories/jewellery-category.webp";
import shoesCategory from "../assets/categories/shoes-category.webp";
import fragrancesCategory from "../assets/categories/fragrances-category.webp";
import watchesCategory from "../assets/categories/watches-category.webp";
import beautyCategory from "../assets/categories/beauty-category.webp";
import { endPoints } from "../config/apiConstants";


const categories = [
    {name: "dresses", image: dressesCategory, endPoint: endPoints.womenDresses},
    {name: "tops", image: topsCategory, endPoint: endPoints.womenTops},
    {name: "bags", image: bagsCategory, endPoint: endPoints.womenBags},
    {name: "jewellery", image: jewelleryCateogry, endPoint: endPoints.womenJewellery},
    {name: "shoes", image: shoesCategory, endPoint: endPoints.womenShoes},
    {name: "fragrances", image: fragrancesCategory, endPoint: endPoints.womenFragrances},
    {name: "watches", image: watchesCategory, endPoint: endPoints.womenWatches},
    {name: "beauty", image: beautyCategory, endPoint: endPoints.womenBeauty},
];

export default categories;