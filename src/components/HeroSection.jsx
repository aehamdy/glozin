import banner1 from "../assets/hero-banner-1.jpg";
import banner2 from "../assets/hero-banner-2.jpg";
import banner3 from "../assets/hero-banner-3.jpg";

const slides = [
  { id: 1, image: banner1, subHeading: "", heading: "" },
  { id: 2, image: banner2, subHeading: "", heading: "" },
  { id: 3, image: banner3, subHeading: "", heading: "" },
];

function HeroSection() {
  return (
    <section className="relative w-full h-dvh bg-sky-800 rounded-small overflow-hidden">
      <div>
        <img src="" alt="" className="w-full" />
      </div>
    </section>
  );
}
export default HeroSection;
