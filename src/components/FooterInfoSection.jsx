import FooterHeading from "./FooterHeading";
import storeData from "../data/storeData";

function FooterInfoSection() {
  return (
    <>
      <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 lg:gap-8">
        <FooterHeading title="Help Customers" />
        <p className="w-1/2 md:w-full text-sm md:texe-base text-center md:text-start">
          Find a location nearest you to reduce shipping costs and make shopping
          easier.
        </p>
        <div className="flex md:flex-col items-start gap-5 md:gap-1 lg:gap-3 text-sm md:texe-base ">
          <a href="#" className="hover:text-primary-red duration-short">
            {storeData.phone}
          </a>
          <a href="#" className="hover:text-primary-red duration-short">
            {storeData.customerCareEmail}
          </a>
        </div>
      </div>
    </>
  );
}
export default FooterInfoSection;
