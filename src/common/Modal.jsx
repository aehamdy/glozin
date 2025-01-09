/* eslint-disable react/prop-types */
function Modal({ isOpen, onClose, children }) {
  !isOpen && null;

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-[100]"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full p-6 bg-white rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal;
