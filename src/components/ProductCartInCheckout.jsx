/* eslint-disable react/prop-types */

function ProductCartInCheckout({ product }) {
  return (
    <article className="flex justify-between gap-3">
      <div className="flex gap-3">
        <div className="relative w-[70px] border border-gray-300 rounded-md">
          <img src={`${product.images[0]}`} alt={`${product.title} image`} />
        </div>

        <div>
          <span>{product.title}</span>
        </div>
      </div>

      <div>
        <span>${product.price}</span>
      </div>
    </article>
  );
}
export default ProductCartInCheckout;
