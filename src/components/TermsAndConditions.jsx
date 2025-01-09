/* eslint-disable react/prop-types */

import storeData from "../data/storeData";
import Icon from "./Icon";

function TermsAndConditions({ toggleModal }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex flex-col items-start w-11/12 md:w-4/5 lg:w-3/5 mx-auto p-4 md:p-6 text-secondary-dark rounded-small bg-primary-light"
    >
      <Icon
        name="close"
        className="absolute top-4 end-4 text-content-medium-dark hover:text-gray-800 z-10"
        onClickFunction={toggleModal}
      />
      <h3 className="md:text-xl mb-1 md:mb-2 font-semibold text-lg">
        Terms Of Service
      </h3>
      <div className="flex flex-col items-start gap-2 text-start border-t pt-3">
        <div>
          <strong className="block mb-0 md:mb-1">
            Last Updated: September 08. 2024.
          </strong>
          <p>
            Welcome to the Glozin Store, Inc. (“{storeData.incName}”) web site
            located at {storeData.incWebsite} (“the Site”).{" "}
            {storeData.name.charAt(0).toUpperCase() + storeData.name.slice(1)}{" "}
            provides this Site as a service to our customers. Please read the
            following terms of service (“Terms”) as they govern your use of our
            Site and our services and content accessible via our Site. To make
            these Terms easier to read, the Site and our services and content
            are collectively called the “Services.”
          </p>
        </div>
        <div>
          <strong className="block mb-0 md:mb-1">Privacy Policy.</strong>
          Please refer to our Privacy Policy. https://www.glozin.com/privacy for
          information on how we collect, use and disclose information from our
          users. You acknowledge and agree that your use of the Services is
          subject to our Privacy Policy.{" "}
        </div>
        <div>
          <strong className="block mb-0 md:mb-1">Customer Satisfaction.</strong>
          At {storeData.name.charAt(0).toUpperCase() +
            storeData.name.slice(1)}{" "}
          , we are committed to providing our customers with great quality
          products at low prices. Our products are sold online only in limited
          quantities and availabilities. We have done our best to display our
          items as accurately as possible via our Services. Please be aware
          however that variations in style, color, size, shape and look may
          occur. If you are not satisfied your purchase, please review our
          return policy under our FAQ at https://www.glozin.com/help.
        </div>
      </div>
    </div>
  );
}
export default TermsAndConditions;
