import { Link } from "react-router-dom";
import ROUTES from "../config/routes";
import storeData from "../data/storeData";
import { useCart } from "../context/CartContext";
import ProductCardInCheckout from "../components/ProductCardInCheckout";

function OrderConfirmation() {
  const { buyNowProduct, cartList } = useCart();

  return (
    <section className="py-10 px-4 bg-emerald-600">
      <div className="flex flex-col items-center gap-0 lg:w-3/4 lg:mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl">
            Woohoo! Your order is confirmed.
          </h2>
          <p className="text-lg">
            <span className="font-bold">
              {storeData.name.charAt(0).toUpperCase() +
                storeData.name.slice(1).toLowerCase()}
            </span>{" "}
            will start working on this right away.
          </p>
          <div>
            <p className="">
              Delivery times are estimated. If you&apos;re experiencing
              difficulty with this order.
            </p>
            <p>
              Please{" "}
              <Link to={ROUTES.CONTACT} className="underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>

        <div className="my-4">
          <h3 className="mb-2 font-semibold text-2xl">Order Details</h3>
          <div className="flex gap-2 p-2 font-semibold text-zinc-900 bg-yellow-300 rounded-md">
            <p className="">Order Number:</p>
            <h4 className="font-light">#1234</h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:w-3/4  mx-auto text-black">
        <div className="flex flex-col py-5 px-4 md:px-6 text-sm md:text-base bg-slate-50 shadow-2xl rounded-md">
          {buyNowProduct ? (
            <ProductCardInCheckout product={buyNowProduct} />
          ) : (
            cartList?.map((product, index) => (
              <article
                key={index}
                className={`flex gap-3 py-3 border-b ${
                  index === cartList.length - 1 && "border-none"
                }`}
              >
                <div className="w-[70px] border border-gray-300 rounded-md">
                  <img src={product.images[0]} alt={`${product.title} image`} />
                </div>
                <div className="flex justify-between w-full">
                  <span className="w-[160px] text-start">{product.title}</span>
                  <span className="">x{product.orderQuantity}</span>
                  <span>$ {product.price.toFixed(2)}</span>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
export default OrderConfirmation;
