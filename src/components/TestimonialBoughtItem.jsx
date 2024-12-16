/* eslint-disable react/prop-types */
function TestimonialBoughtItem({ item }) {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden cursor-pointer">
        <img src={item.image} alt="" className="" />
      </div>
      <div className="group flex flex-col items-start gap-1 font-semibold text-secondary-dark">
        <span className=" text-sm group-hover:text-primary-red duration-short cursor-pointer">
          {item.name}
        </span>
        <span className="">${item.price}</span>
      </div>
    </div>
  );
}
export default TestimonialBoughtItem;
