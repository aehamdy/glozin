import dressesCategory from "../assets/categories/dresses-category.webp";
import topsCategory from "../assets/categories/tops-category.webp";
import bagsCategory from "../assets/categories/bags-category.webp";
import jewelleryCateogry from "../assets/categories/jewellery-category.webp";
import shoesCategory from "../assets/categories/shoes-category.webp";
import fragrancesCategory from "../assets/categories/fragrances-category.webp";
import watchesCategory from "../assets/categories/watches-category.webp";
import beautyCategory from "../assets/categories/beauty-category.webp";


const categories = [
    {name: "dresses", image: dressesCategory, endPoint: `/womens-dresses`},
    {name: "tops", image: topsCategory, endPoint: `/tops`},
    {name: "bags", image: bagsCategory, endPoint: `/womens-bags`},
    {name: "jewellery", image: jewelleryCateogry, endPoint: `/womens-jewellery`},
    {name: "shoes", image: shoesCategory, endPoint: `/womens-shoes`},
    {name: "fragrances", image: fragrancesCategory, endPoint: `/fragrances`},
    {name: "watches", image: watchesCategory, endPoint: `/womens-watches`},
    {name: "beauty", image: beautyCategory, endPoint: `/beauty`},
];

export default categories;