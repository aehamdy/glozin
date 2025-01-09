/* eslint-disable react/prop-types */
function Modal({ isOpen, onClose, children }) {
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
