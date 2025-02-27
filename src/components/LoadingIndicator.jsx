/* eslint-disable react/prop-types */
import LoaderPipe from "./LoaderPipe";

function LoadingIndicator({ loader, loaderSize = "large" }) {
  const loaderValue = loaderSize.toLowerCase();
  const size =
    loaderValue === "small"
      ? "w-4 h-4"
      : loaderValue === "medium"
      ? "w-6 h-6"
      : loaderValue === "large" && "w-8 h-8";

  return (
    <div className="w-fit mx-auto">
      {loader.toLowerCase() === "pipe" && (
        <section className="flex items-center h-[85dvh]">
          <LoaderPipe />
        </section>
      )}
    </div>
  );
}
export default LoadingIndicator;
