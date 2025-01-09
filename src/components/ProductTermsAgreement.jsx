import { useState } from "react";
import Modal from "../common/Modal";

function ProductTermsAgreement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="flex items-cetner gap-4">
      <input type="checkbox" name="" id="" className="" />
      <p className="flex gap-1 text-sm md:text-base text-secondary-dark">
        I agree with{" "}
        <button
          type="button"
          className="font-semibold text-secondary-dark"
          onClick={toggleModal}
        >
          Terms & Conditions
        </button>
        <Modal isOpen={isModalOpen} onClose={toggleModal}></Modal>
      </p>
    </div>
  );
}
export default ProductTermsAgreement;
