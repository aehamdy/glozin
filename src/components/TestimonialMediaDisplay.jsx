/* eslint-disable react/prop-types */
function TestimonialMediaDisplay({ image, video }) {
  return (
    <div className="relative w-full">
      {image ? (
        <img
          src={image}
          alt="customer image"
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
export default TestimonialMediaDisplay;
