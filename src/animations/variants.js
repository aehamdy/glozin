export const fadeInAnimation = (
  direction,
  delay = 0,
  opacity = 0,
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
          ? 40
          : direction.toLowerCase() === "right"
          ? -40
          : 0,
      opacity: opacity,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: transitionType,
        duration: 1.2,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
