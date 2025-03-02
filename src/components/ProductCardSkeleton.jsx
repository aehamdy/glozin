function ProductCardSkeleton() {
  return (
    <div className="rounded-small shadow-sm">
      <div className="relative h-[230px] rounded-small mt-2 mb-8 border bg-gray-200 animate-pulse">
        <div className="absolute flex flex-col gap-3 top-5 end-3 lg:hidden">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-300 rounded-full"
              ></div>
            ))}
        </div>
      </div>
      <div className="w-3/4 h-3 mx-auto mt-0 mb-2 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-1/2 h-3 mx-auto my-2 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}
export default ProductCardSkeleton;
