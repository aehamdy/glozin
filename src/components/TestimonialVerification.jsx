import Icon from "./Icon";

function TestimonialVerification() {
  return (
    <div className="flex justify-between items-center italic text-[14px] text-content-light-dark tracking-tighter cursor-default">
      <span>
        <Icon
          name="check"
          size="20"
          className="text-content-light-dark cursor-default"
        />
      </span>
      Verified Buyer
    </div>
  );
}
export default TestimonialVerification;
