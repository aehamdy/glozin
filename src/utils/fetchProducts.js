async function fetchProducts(url, options) {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

    return data.results

    } catch (error) {

      console.error("Failed to fetch products:", error);
      throw error;

    }
  }

  export default fetchProducts;