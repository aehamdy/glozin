import FooterCopyright from "./FooterCopyright";
import FooterCreatedBy from "./FooterCreatedBy";

function FooterBottomBar() {
  return (
    <div className="flex justify-between items-center mx-horizontal-spacing py-2 md:py-4 px-horizontal-spacing text-[10px] md:text-base text-content-medium-dark">
      <FooterCopyright />
      <FooterCreatedBy />
    </div>
  );
}
export default FooterBottomBar;
