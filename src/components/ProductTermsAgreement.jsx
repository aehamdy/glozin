/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../common/Modal";
import TermsAndConditions from "./TermsAndConditions";

function ProductTermsAgreement({ setIsInputChecked }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleInput = () => setIsInputChecked((prev) => !prev);

  return (
    <div className="flex items-cetner gap-4">
      <input
        type="checkbox"
        name="terms-conditions-agreement"
        id="terms-agreement"
        className=""
        onClick={toggleInput}
      />
      <label
        htmlFor="terms-agreement"
        className="flex gap-1 text-sm md:text-base text-secondary-dark"
      >
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
      </label>
    </div>
  );
}
export default ProductTermsAgreement;
