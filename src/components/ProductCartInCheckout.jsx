/* eslint-disable react/prop-types */

function ProductCartInCheckout({ product }) {
  return (
    <article className="flex justify-between gap-3 text-sm md:text-base">
      <div className="flex gap-3">
        <div className="relative w-[70px] border border-gray-300 rounded-md">
          <span className="flex justify-center  items-center absolute top-0 end-0 translate-x-1/2 -translate-y-1/2 w-5 h-5  text-xs text-white bg-content-light-dark rounded-full">
            {product.orderQuantity}
          </span>
          <img src={`${product.images[0]}`} alt={`${product.title} image`} />
        </div>

        <div className="text-start">
          <span>{product.title}</span>
        </div>
      </div>

      <div>
        <span>$ {product.price}</span>
      </div>
    </article>
  );
}
export default ProductCartInCheckout;
