import Icon from "./Icon";

/* eslint-disable react/prop-types */
function TopBar({ hideAnnouncementBar }) {
  return (
    <div
      className={`absolute w-full start-0 top-0 flex gap-4 justify-center items-center py-1 text-sm text-primary-light bg-muted-blue`}
    >
      <p className="">
        🔥 Don&apos;t miss our White Friday <span>Sale 75% Off</span>
      </p>
      <Icon
        name="close"
        className="absolute end-1.5 text-slate-300 hover:text-primary-light"
        onClickFunction={hideAnnouncementBar}
      />
    </div>
  );
}

export default TopBar;
