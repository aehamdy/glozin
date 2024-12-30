import saleVideo from "../assets/sale-video.mp4";

function Sale() {
  return (
    <section className="relative">
      <div className="relative before:absolute before:w-full before:h-full before:top-0 before:start-0 before:bg-[#a91717] before:opacity-70 z-[-1]">
        <video autoPlay loop muted src={saleVideo}></video>
      </div>
      <div className="absolute flex flex-col items-center gap-5 text-primary-light top-[10%] start-1/2 -translate-x-1/2 z-[1]">
        <h2 className="font-bold text-6xl tracking-tight">
          White Friday
          <br />
          Sale Up To 75% Off
        </h2>
        <p className="text-lg">
          White Friday sale up to 75% all items. Hurry up!
        </p>
      </div>
    </section>
  );
}
export default Sale;
