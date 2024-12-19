import FooterCopyright from "./FooterCopyright";
import FooterCreatedBy from "./FooterCreatedBy";

function FooterBottomBar() {
  return (
    <div className="flex justify-between items-center py-4 px-[15px] text-[10px] md:text-base text-content-medium-dark">
      <FooterCopyright />
      <FooterCreatedBy />
    </div>
  );
}
export default FooterBottomBar;
