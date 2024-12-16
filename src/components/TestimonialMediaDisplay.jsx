/* eslint-disable react/prop-types */
function TestimonialMediaDisplay({ image, video }) {
  return (
    <div className="hidden md:block relative w-full">
      {video ? (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt="customer image"
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
        />
      )}
    </div>
  );
}
export default TestimonialMediaDisplay;
