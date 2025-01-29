import { useCart } from "../context/CartContext";

function CheckoutCartSection() {
  const { cartList } = useCart();

  return (
    <div className="col-span-6 py-8 lg:px-8 text-[15px] text-black bg-cloud-gray">
      <div className="flex flex-col gap-3">
        {cartList.map((product, index) => (
          <article key={index} className="flex justify-between gap-3">
            <div className="flex gap-3">
              <div className="relative w-[70px] border border-gray-300 rounded-md">
                <img
                  src={`${product.images[0]}`}
                  alt={`${product.title} image`}
                />
              </div>

              <div>
                <span>{product.title}</span>
              </div>
            </div>

            <div>
              <span>${product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export default CheckoutCartSection;
