function SaleBanner() {
  return (
    <article className="flex flex-col gap-[5px] md:gap-[2px]">
      <div className="flex flex-col items-center gap-2 pt-8 pb-5 md:pt-16 md:pb-8 px-6 text-primary-light bg-[#fff3] border border-[#fff3] rounded-small backdrop-filter">
        <span className="w-fit py-2 px-5 font-semibold text-xs text-secondary-dark bg-primary-light rounded-medium">
          HOLIDAY
        </span>
        <h4 className="font-bold text-xl md:text-2xl">Sale 30% Off</h4>
        <p className="text-sm md:text-[15px]">
          30% off during the hoilday season.
        </p>
      </div>
      <div className="p-3 md:p-5 text-secondary-dark uppercase bg-primary-light rounded-small">
        <p className="text-sm">use code:</p>
        <h5 className="font-extrabold">holiday30all</h5>
      </div>
    </article>
  );
}
export default SaleBanner;
