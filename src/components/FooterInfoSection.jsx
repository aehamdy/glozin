function FooterInfoSection() {
  return (
    <div className="flex flex-col items-start gap-10">
      <h3 className="font-semibold text-primary-light">Help Customers</h3>
      <p className="w-4/5 text-start">
        Find a location nearest you to reduce shipping costs and make shopping
        easier.
      </p>
      <div className="flex flex-col items-start gap-3">
        <a href="#" className="hover:text-primary-red duration-short">
          +1 (973) 435-3638
        </a>
        <a href="#" className="hover:text-primary-red duration-short">
          info@fashionwomen.com
        </a>
      </div>
    </div>
  );
}
export default FooterInfoSection;
