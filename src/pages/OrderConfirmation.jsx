import { Link } from "react-router-dom";
import ROUTES from "../config/routes";
import storeData from "../data/storeData";
import { useCart } from "../context/CartContext";
import ProductCardInCheckout from "../components/ProductCardInCheckout";
import { useCheckout } from "../context/CheckoutContext";
import { useUserData } from "../context/UserDataContext";

function OrderConfirmation() {
  const { buyNowProduct, cartList } = useCart();
  const { subtotal, total, shippingFees } = useCheckout();
  const {
    countryValue,
    firstNameValue,
    lastNameValue,
    addressValue,
    apartmentValue,
    cityValue,
  } = useUserData();

  return (
    <section className="py-10 px-4 bg-emerald-600">
      <div className="w-fit mx-auto">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Circle */}
          <circle cx="100" cy="100" r="40" fill="white" stroke="none" />

          {/* Shadow for Checkmark - Enlarged */}
          <path
            d="M88 102 L98 112 L118 82"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(4,4)"
          />

          {/* Green Checkmark - Bolder */}
          <path
            d="M85 100 L98 112 L118 82"
            stroke="green"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Confetti - Randomized Positions */}
          <path
            d="M50,150 C55,140 65,140 70,150"
            stroke="yellow"
            strokeWidth="3"
            fill="none"
            transform="translate(40, -105)"
          />
          <path
            d="M65,45 Q80,50 65,55 T65,65"
            stroke="#F3B94E"
            strokeWidth="3"
            fill="none"
            transform="translate(91, 14)"
          />
          <circle cx="163" cy="115" r="7" fill="#93B3FC" />
          <path
            d="M65,45 Q70,35 75,45 T85,45"
            stroke="pink"
            strokeWidth="3"
            fill="none"
            transform="translate(-30, 27)"
          />
          <polygon
            points="25,90 30,80 35,90 30,100"
            fill="silver"
            transform="translate(10,25)"
          />
        </svg>
      </div>
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
        <div className="flex flex-col  py-5 px-4 md:px-6 text-sm md:text-base bg-slate-50 shadow-2xl rounded-md">
          <div className="flex flex-col">
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
                    <img
                      src={product.images[0]}
                      alt={`${product.title} image`}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="w-[160px] text-start">
                      {product.title}
                    </span>
                    <span className="">x{product.orderQuantity}</span>
                    <span>$ {product.price.toFixed(2)}</span>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="flex flex-col text-start gap-2 mt-6 pt-5 bg-slate-50 border-t">
            <div className="flex justify-between">
              <div>
                <span>Customer Name: </span>
                <span>{firstNameValue + " " + lastNameValue}</span>
              </div>
              <div className="">
                <span>Order Date:</span>
                <span>April 16, 2025</span>
              </div>
            </div>
            <div>
              <span>Payment Method: </span>
              <span>COD</span>
            </div>
            <div className="flex">
              <span>Shipping Details:</span>
              <span>Address: {addressValue}</span>
              <span>Apartment: {apartmentValue}</span>
              <span>City: {cityValue}</span>
              <span>Country: {countryValue}</span>
            </div>
          </div>
        </div>

        <div className="py-5 px-4 md:px-6 text-sm md:text-base bg-slate-50 shadow-2xl rounded-md">
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="font-semibold text-gray-700">Subtotal</span>
              <span>$ {subtotal}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="font-semibold text-gray-700">Discount</span>
              <span>x%</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="font-semibold text-gray-700">Shipping</span>
              <span>${shippingFees}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="font-semibold text-gray-700">Total:</span>
              <span>$ {total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderConfirmation;
