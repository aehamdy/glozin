/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../common/Modal";
import TermsAndConditions from "./TermsAndConditions";

function ProductTermsAgreement({ setIsAgreementChecked }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleInput = () => setIsAgreementChecked((prev) => !prev);

  return (
    <div className="flex items-cetner gap-2">
      <input
        type="checkbox"
        name="terms-conditions-agreement"
        id="terms-agreement"
        className=""
        onClick={toggleInput}
      />
      <label
        htmlFor="terms-agreement"
        className="flex text-sm md:text-base text-secondary-dark"
      >
        I agree with{" "}
      </label>
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
    </div>
  );
}
export default ProductTermsAgreement;
