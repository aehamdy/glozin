export const fadeInAnimation = (
  direction,
  delay = 0,
  opacity = 0,
  duration = 1,
  transitionType = "tween"
) => {
  return {
    hidden: {
      y:
        direction.toLowerCase() === "up"
          ? "20%"
          : direction.toLowerCase() === "down"
          ? "-20%"
          : 0,
      x:
        direction.toLowerCase() === "left"
          ? 50
          : direction.toLowerCase() === "right"
          ? -50
          : 0,
      opacity: opacity,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: transitionType,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
