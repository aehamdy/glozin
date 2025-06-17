import ROUTES from "./routes";

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const productCategoryKey = "/products/category";

export const endPoints = {
  womenBeauty: `${ROUTES.CATEGORIES}/beauty`,
  womenDresses: `${ROUTES.CATEGORIES}/womens-dresses`,
  womenFragrances: `${ROUTES.CATEGORIES}/fragrances`,
  womenTops: `${ROUTES.CATEGORIES}/tops`,
  womenBags: `${ROUTES.CATEGORIES}/womens-bags`,
  womenJewellery: `${ROUTES.CATEGORIES}/womens-jewellery`,
  womenShoes: `${ROUTES.CATEGORIES}/womens-shoes`,
  womenWatches: `${ROUTES.CATEGORIES}/womens-watches`,
};
