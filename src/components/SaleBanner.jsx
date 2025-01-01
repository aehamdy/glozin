/* eslint-disable react/prop-types */
function SaleBanner({ banner }) {
  return (
    <article className="flex flex-col gap-[5px] md:gap-[2px]">
      <div className="flex flex-col items-center gap-2 pt-8 pb-5 md:pt-16 md:pb-8 px-6 text-primary-light bg-[#fff3] border border-[#fff3] rounded-small backdrop-filter">
        <span className="w-fit py-2 px-5 font-semibold uppercase text-xs text-secondary-dark bg-primary-light rounded-medium">
          {banner.label}
        </span>
        <h4 className="font-bold text-xl md:text-2xl">{banner.title}</h4>
        <p className="text-sm md:text-[15px]">{banner.desc}</p>
      </div>
      <div className="p-3 md:p-5 text-secondary-dark uppercase bg-primary-light rounded-small">
        <p className="text-sm uppercase">use code:</p>
        <h5 className="font-extrabold uppercase">{banner.code}</h5>
      </div>
    </article>
  );
}
export default SaleBanner;
