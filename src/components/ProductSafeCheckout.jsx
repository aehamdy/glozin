import safeBadgeImage from "../assets/safe-badge.webp";

function ProductSafeCheckout() {
  return (
    <div className="safe-checkout flex flex-col items-center gap-2 text-sm md:text-base">
      <p className="font-semibold text-secondary-dark">
        Guarantee Safe Checkout:
      </p>
      <div className="w-3/4">
        <img
          src={safeBadgeImage}
          alt="safe badge image"
          className="max-w-full"
        />
      </div>
    </div>
  );
}
export default ProductSafeCheckout;
