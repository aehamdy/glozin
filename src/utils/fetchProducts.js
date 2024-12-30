async function fetchProducts(url, options) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

    //   setProducts(result.results || []);
    return result.results

    } catch (error) {

      console.error("Failed to fetch products:", error);
      throw error;

    }
  }

  export default fetchProducts;