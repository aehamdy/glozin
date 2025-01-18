/* eslint-disable react/prop-types */
import { useState } from "react";
// import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import ProductQuantityInput from "./ProductQuantityInput";
import ProductTermsAgreement from "./ProductTermsAgreement";

function ProductForm({ productId }) {
  const [isInputChecked, setIsInputChecked] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-5 w-full my-5 pt-8 border-t">
      <div className="flex justify-between items-center gap-3 px-1">
        <ProductQuantityInput
          setProductQuantity={setProductQuantity}
          productQuantity={productQuantity}
        />

        <Button
          value="Add to Cart"
          status={productQuantity <= 0}
          className={`w-1/2 py-2.5 md:py-3 px-4 font-semibold text-base lg:text-lg text-primary-light ${
            productQuantity > 0
              ? "bg-secondary-dark hover:bg-primary-dark active:bg-gray-800"
              : "bg-gray-300"
          } rounded-medium`}
        />
        <AddToWishlistButton productId={productId} variant="primary" />
      </div>

      <div className="flex flex-col gap-4 px-1">
        <ProductTermsAgreement setIsInputChecked={setIsInputChecked} />
        <Button
          value="Buy Now"
          status={!isInputChecked}
          className={`text-primary-light py-2.5 rounded-medium ${
            isInputChecked
              ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
              : "bg-red-300"
          } duration-short`}
        />
      </div>
    </div>
  );
}
export default ProductForm;
