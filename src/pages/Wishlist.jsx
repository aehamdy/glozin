import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";
import { useWishlist } from "../context/wishlistContext";
import EmptyWishlist from "../components/EmptyWishlist";

function Wishlist() {
  const { wishlistProducts, removeFromWishlist } = useWishlist();

  return (
    <section className="m-horizontal-spacing lg:p-horizontal-spacing">
      <SectionHeader
        heading="Wishlist Product"
        desc="Explore the items you've marked as favorites, ready to be added to your cart and enjoyed."
      />

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {wishlistProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </section>
  );
}
export default Wishlist;
