/* eslint-disable react/prop-types */
import { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-overlay"
      onClick={onClose}
    >
      {children}
    </div>
  );
}
export default Modal;
