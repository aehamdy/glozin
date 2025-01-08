/* eslint-disable react/prop-types */
function ProductImages({ images, productTitle }) {
  return (
    <div className="flex flex-col gap-y-1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image of ${productTitle}`}
          className="w-full object-cover"
        />
      ))}
    </div>
  );
}
export default ProductImages;
