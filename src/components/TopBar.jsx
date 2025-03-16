/* eslint-disable react/prop-types */
import discountCodes from "../data/discountCodes";
import Icon from "./Icon";

function TopBar({ hideAnnouncementBar }) {
  const selectedOffer = discountCodes.find(
    (offer) => offer.label === "white friday"
  );

  const formattedLabel = selectedOffer.label
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const offerCode = selectedOffer.code.toUpperCase();
  return (
    <div
      className={`absolute w-full start-0 top-0 flex gap-4 justify-center items-center py-1 text-clamp-topbar text-primary-light bg-muted-blue`}
    >
      <p className="">
        🔥 Don&apos;t miss our {formattedLabel}{" "}
        <span>Sale {selectedOffer.discountAmount}% Off</span> using{" "}
        <span className="font-semibold">{offerCode}</span>
      </p>
      <Icon
        name="close"
        className="absolute end-1.5 text-slate-300 hover:text-primary-light hover:rotate-180"
        onClickFunction={hideAnnouncementBar}
      />
    </div>
  );
}

export default TopBar;
