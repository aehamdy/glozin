import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import ProductQuantityInput from "./ProductQuantityInput";
import ProductTermsAgreement from "./ProductTermsAgreement";

function ProductForm() {
  const [isInputChecked, setIsInputChecked] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <div className="flex flex-col gap-5 w-full my-5 pt-8 border-t">
      <div className="flex justify-between items-center gap-3 px-1">
        <ProductQuantityInput
          setProductQuantity={setProductQuantity}
          productQuantity={productQuantity}
        />

        <AddToCartButton status={productQuantity > 0} />
        <AddToWishlistButton />
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
