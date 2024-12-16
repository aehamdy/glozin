/* eslint-disable react/prop-types */
function TestimonialBoughtItem({ item }) {
  return (
    <div className="flex gap-4 items-center py-2 md:py-4">
      <div className="w-16 h-16 rounded-full overflow-hidden cursor-pointer">
        <img src={item.image} alt="" className="" />
      </div>
      <div className="flex flex-col items-start gap-1 font-semibold text-secondary-dark">
        <span className="text-sm hover:text-primary-red duration-short cursor-pointer">
          {item.name}
        </span>
        <span className="text-sm md:text-base">${item.price}</span>
      </div>
    </div>
  );
}
export default TestimonialBoughtItem;
