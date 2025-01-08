/* eslint-disable react/prop-types */
function ProductImages({ images, productTitle }) {
  return (
    <div className="flex lg:flex-col gap-1 bg-gray-50 overflow-x-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image of ${productTitle}`}
          className="w-full bg-primary-light object-cover"
        />
      ))}
    </div>
  );
}
export default ProductImages;
