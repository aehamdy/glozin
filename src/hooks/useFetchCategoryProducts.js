import { useEffect, useState } from "react";
import { BASE_API_URL, productCategoryKey } from "../config/apiConstants";

const useFetchCategoryProducts = (categoryName) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${BASE_API_URL}${productCategoryKey}/${categoryName}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Faild to fetch products");
        }

        const data = await response.json();

        setProductList(data.products);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return [productList, isLoading, isError];
};

export default useFetchCategoryProducts;