/* eslint-disable react/prop-types */
import { useState } from "react";
import WishlistButton from "./WishlistButton";
import ProductTermsAgreement from "./ProductTermsAgreement";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";

function ProductForm({ product }) {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);

  const decreaseQuantity = () => {
    setProductQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const increaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-5 w-full my-5 pt-8 border-t">
      <div className="flex justify-between items-center gap-3 px-1">
        <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
          <button
            type="button"
            onClick={decreaseQuantity}
            className={`py-2 md:py-3 px-3 md:px-4 text-xl ${
              productQuantity <= 1
                ? "text-gray-300"
                : "text-primary-dark bg-transparent hover:bg-gray-200"
            } `}
            aria-label="Decrease amount"
          >
            -
          </button>

          <input
            type="number"
            value={productQuantity}
            readOnly
            className={`quantity-input w-12 py-2 md:py-3 bg-transparent text-primary-dark text-center focus:outline-none`}
            aria-label="Item amount"
          />

          <button
            type="button"
            onClick={increaseQuantity}
            className={`py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200`}
            aria-label="Increase amount"
          >
            +
          </button>
        </div>

        <AddToCartButton
          status={productQuantity <= 0}
          productQuantity={productQuantity}
          variant="productDetails"
          product={product}
        />

        <WishlistButton
          productId={product.id}
          icon="wishlist"
          variant="primary"
        />
      </div>

      <div className="flex flex-col gap-4 px-1">
        <ProductTermsAgreement setIsAgreementChecked={setIsAgreementChecked} />
        <BuyNowButton
          product={product}
          isAgreementChecked={isAgreementChecked}
        />
      </div>
    </div>
  );
}
export default ProductForm;
