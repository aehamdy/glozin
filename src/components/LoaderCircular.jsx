/* eslint-disable react/prop-types */

function LoaderCircular({
  loaderColor = "border-blue-500",
  text,
  textColor = "text-gray-300",
}) {
  return (
    <div className="flex justify-center items-center gap-3 text-sm">
      <div
        className={`w-5 h-5 border-[3px] ${loaderColor} border-r-gray-300 rounded-full animate-spin`}
      ></div>
      {text && <p className={`${textColor}`}>{text}</p>}
    </div>
  );
}
export default LoaderCircular;
