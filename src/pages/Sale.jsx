import saleVideo from "../assets/sale-video.mp4";

function Sale() {
  return (
    <section className="relative">
      <div className="relative before:absolute before:w-full before:h-full before:top-0 before:start-0 before:bg-[#a91717] before:opacity-70 z-[-1]">
        <video autoPlay loop muted src={saleVideo}></video>
      </div>
    </section>
  );
}
export default Sale;
