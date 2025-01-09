/* eslint-disable react/prop-types */
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-[100]"
      onClick={onClose}
    >
      {children}
    </div>
  );
}
export default Modal;
