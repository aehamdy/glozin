import { useEffect, useState } from "react";
import { BASE_API_URL, endPoints, productCategoryKey } from "../config/apiConstants";

function useFetchAllProducts() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const url = `${BASE_API_URL}${productCategoryKey}`;

        const responses = await Promise.all(
          Object.values(endPoints).map((category) =>
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
