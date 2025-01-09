import { useState } from "react";
import Modal from "../common/Modal";
import TermsAndConditions from "./TermsAndConditions";

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
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <TermsAndConditions toggleModal={toggleModal} />
        </Modal>
      </p>
    </div>
  );
}
export default ProductTermsAgreement;
