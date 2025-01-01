/* eslint-disable react/prop-types */
function ProductCard({ product }) {
  return (
    <article className="product-card group rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium">
      <div className="flex justify-center rounded-small group-hover:rounded-b-none overflow-hidden">
        <img
          src={product.images[0].baseUrl}
          alt={product.name + " image"}
          className="w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 my-4 text-center">
        <h3 className="px-3 font-semibold text-xl text-secondary-dark">
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
  );
}
export default ProductCard;
