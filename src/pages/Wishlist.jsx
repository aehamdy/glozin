import SectionHeader from "../components/SectionHeader";

function Wishlist() {
  return (
    <section className="m-horizontal-spacing lg:p-horizontal-spacing">
      <SectionHeader
        heading="Wishlist Product"
        desc="Explore the items you've marked as favorites, ready to be added to your cart and enjoyed."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5"></div>
    </section>
  );
}
export default Wishlist;
