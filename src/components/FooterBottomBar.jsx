import FooterCopyright from "./FooterCopyright";
import FooterCreatedBy from "./FooterCreatedBy";

function FooterBottomBar() {
  return (
    <div className="flex justify-between items-center py-7 px-[15px] text-content-medium-dark border-t border-border">
      <FooterCopyright />
      <FooterCreatedBy />
    </div>
  );
}
export default FooterBottomBar;
