/* eslint-disable react/prop-types */
import Icon from "./Icon";

function StoreNotification({ alert, message }) {
  const messageContent =
    message === "payment unavailable"
      ? "This store can't accept payments right now. Refresh this page or come back later."
      : message;
  let messageStyle;
  let notificationIcon;

  if (alert.toLowerCase() === "error") {
    messageStyle = "text-red-600 bg-red-50 border-red-200";
    notificationIcon = "warning";
  } else if (alert.toLowerCase() === "success") {
    messageStyle = "text-green-700 bg-green-50 border-green-300";
  }

  return (
    <div
      className={`flex items-center gap-2 w-full py-3 px-5 text-start text-sm ${messageStyle} border rounded-md`}
    >
      <div>{<Icon name={notificationIcon} size="24" />}</div>
      <p className="">{messageContent}</p>
    </div>
  );
}
export default StoreNotification;
