import { useState, useEffect } from "react";

function ProductsSection() {
  const [products, setProducts] = useState([]);

  const url = urls.womenDivided;

  async function fetchProducts() {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);

      setProducts(result.results || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="py-vertical-spacing px-horizontal-spacing">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-secondary-dark text-3xl">Products</h2>
        <p className="text-content-medium-dark text-center">
          Enjoy exploring all our products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-8">
        {products.map((product, index) => (
          <article
            key={index}
            className="product-card group rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium"
          >
            <div className="flex justify-center rounded-small group-hover:rounded-b-none overflow-hidden">
              <img
                src={product.images[0].baseUrl}
                alt={product.name + " image"}
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 my-4 text-center">
              <h3 className="font-semibold text-xl text-secondary-dark">
                {product.name}
              </h3>

              <div className="flex justify-center items-center gap-1 text-lg">
                {product.sale && (
                  <h4 className="font-medium text-red-600">
                    ${product.sale && product.redPrice.value}
                  </h4>
                )}

                <h4
                  className={`${
                    product.sale
                      ? "line-through text-content-medium-dark"
                      : "text-secondary-dark"
                  }`}
                >
                  $ {product.whitePrice.value}
                </h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
