/* eslint-disable react/prop-types */
function IconBadge({ value }) {
  return (
    <div className="absolute top-2 end-2 -translate-y-full translate-x-full flex justify-center items-center w-4 h-4 text-xs text-primary-light bg-red-500 rounded-full">
      {value}
    </div>
  );
}
export default IconBadge;
