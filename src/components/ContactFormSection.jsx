import { motion } from "motion/react";
import { useState } from "react";
import Button from "./Button";
import { fadeInAnimation } from "../animations/variants";

function ContactFormSection() {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handlePrivacyInputToggle = () => {
    setIsPrivacyChecked((prev) => !prev);
  };

  return (
    <motion.div
      className="lg:col-span-2 space-y-4 text-secondary-dark text-start"
      variants={fadeInAnimation("left", 0.8)}
      initial="hidden"
      animate="visible"
    >
      <div>
        <h3 className="font-semibold text-xl md:text-2xl">Contact Us</h3>
        <p className="text-start text-content-medium-dark">
          Please submit all general enquiries in the contact form below and we
          look forward to hearing from you soon.
        </p>
      </div>

      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-wrap justify-between gap-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="flex-1 py-3 px-4 bg-primary-light border border-primary-border rounded-medium placeholder:text-sm"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="flex-1 py-3 px-4 bg-primary-light border border-primary-border rounded-medium placeholder:text-sm"
          />
        </div>

        <textarea
          name=""
          id=""
          placeholder="Please enter your message"
          className="w-full p-4 bg-primary-light border border-primary-border rounded-2xl placeholder:text-sm"
        ></textarea>

        <label htmlFor="privacy-policy" className="flex gap-3">
          <input
            type="checkbox"
            name=""
            id="privacy-policy"
            className="cursor-pointer"
            onChange={handlePrivacyInputToggle}
          />
          <p className="text-sm sm:text-base">
            I agree to the{" "}
            <a
              href="#"
              className="font-semibold underline hover:text-blue-600 duration-medium"
            >
              Privacy Policy
            </a>{" "}
            of the website.
          </p>
        </label>

        <Button
          value="Send"
          status={isPrivacyChecked}
          className={`w-full md:w-1/2 me-auto md:mx-auto py-3 px-12 ${
            isPrivacyChecked
              ? "text-primary-light bg-secondary-dark hover:bg-primary-dark border cursor-pointer"
              : "text-primary-light bg-gray-400 cursor-not-allowed"
          } rounded-medium`}
        />
      </form>
    </motion.div>
  );
}
export default ContactFormSection;
