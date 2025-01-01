import saleVideo from "../assets/sale-video.mp4";
import BrandStoryPanel from "../components/BrandStoryPanel";
import FeaturesSection from "../components/FeaturesSection";
import HorizontalScrollingText from "../components/HorizontalScrollingText";
import SaleBannersWrapper from "../components/SaleBannersWrapper";
import TestimonialsSection from "../components/TestimonialsSection";

function Sale() {
  return (
    <section className="relative">
      <div className="relative w-full py-8 before:absolute before:w-full before:h-full before:top-0 before:start-0 before:bg-[#a9171790] z-[-1]">
        <video
          autoPlay
          muted
          loop
          src={saleVideo}
          className="absolute w-full h-full top-0 start-0 object-cover z-[-2]"
        ></video>
        <div className="relative flex flex-col items-center gap-6 md:gap-10 z-10">
          <div className="flex flex-col items-center gap-5 text-primary-light ">
            <h2 className="font-bold text-5xl md:text-6xl tracking-tight">
              White Friday
              <br />
              Sale Up To 75% Off
            </h2>
            <p className="text-lg">
              White Friday sale up to 75% all items. Hurry up!
            </p>
          </div>
          <SaleBannersWrapper />
        </div>
      </div>
      <HorizontalScrollingText
        scrollingText={[
          "Black Friday & Holiday Sale: Up to 75% Off All Products",
          "Black Friday & Holiday Sale: Up to 75% Off All Products",
        ]}
        mode="dark"
        fullWidth="false"
      />
      <TestimonialsSection showCustomerImage={false} />
      <BrandStoryPanel />
      <FeaturesSection />
    </section>
  );
}
export default Sale;
