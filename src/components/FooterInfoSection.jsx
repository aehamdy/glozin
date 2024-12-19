import FooterHeading from "./FooterHeading";

function FooterInfoSection() {
  return (
    <>
      <div className="flex flex-col items-start gap-2 md:gap-4 lg:gap-8">
        <FooterHeading title="Help Customers" />
        <p className="text-sm md:texe-base text-start">
          Find a location nearest you to reduce shipping costs and make shopping
          easier.
        </p>
        <div className="flex flex-col items-start md:gap-1 lg:gap-3 text-sm md:texe-base ">
          <a href="#" className="hover:text-primary-red duration-short">
            +1 (973) 435-3638
          </a>
          <a href="#" className="hover:text-primary-red duration-short">
            info@fashionwomen.com
          </a>
        </div>
      </div>
    </>
  );
}
export default FooterInfoSection;
