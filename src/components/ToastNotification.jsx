/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Icon from "./Icon";

function ToastNotification({ message, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed bottom-2 md:bottom-4 end-1 md:end-3 flex items-center gap-3 md:gap-5 py-2.5 md:py-3 px-2.5 md:px-4 text-sm md:text-base text-white bg-black/90 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-2 scale-50"
      }`}
    >
      <p>{message}</p>
      <button onClick={handleClose}>
        <Icon
          name="close"
          className="p-1 hover:text-white hover:scale-110 hover:rotate-180 border border-gray-500 hover:border-white rounded-full duration-long"
        />
      </button>
    </div>
  );
}

export default ToastNotification;
