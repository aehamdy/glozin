import { useEffect, useState } from "react";
import { BASE_API_URL, productCategoryKey } from "../config/apiConstants";

const apiEndPoints = {
  womenBeauty: "/beauty",
  womenDresses: "/womens-dresses",
  womenFragrances: "/fragrances",
  womenTops: "/tops",
  womenBags: "/womens-bags",
  womenJewellery: "/womens-jewellery",
  womenShoes: "/womens-shoes",
  womenWatches: "/womens-watches",
};

function useFetchAllProducts() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const url = `${BASE_API_URL}${productCategoryKey}`;

        const responses = await Promise.all(
          Object.values(apiEndPoints).map((category) =>
            fetch(`${url}${category}`)
          )
        );

        for (const response of responses) {
          if (!response.ok) {
            throw new Error("Something went wrong while fetching products.");
          }
        }

        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        const allProducts = data.flatMap(
          (categoryData) => categoryData.products
        );

        setProductList(allProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return [productList, isLoading, error];
}

export default useFetchAllProducts;
