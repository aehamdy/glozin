import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import { useWishlist } from "../context/wishlistContext";

function Wishlist() {
  const { wishlistProducts } = useWishlist();

  return (
    <section className="m-horizontal-spacing lg:p-horizontal-spacing">
      <SectionHeader
        heading="Wishlist Product"
        desc="Explore the items you've marked as favorites, ready to be added to your cart and enjoyed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
        {wishlistProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
export default Wishlist;
