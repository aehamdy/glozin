import Icon from "./Icon";

/* eslint-disable react/prop-types */
function StoreNotification({ alert, message }) {
  let messageStyle;
  let notificationIcon;

  if (alert.toLowerCase() === "error") {
    messageStyle = "text-red-700 bg-red-50 border-red-300";
    notificationIcon = "warning";
  } else if (alert.toLowerCase() === "success") {
    messageStyle = "text-green-700 bg-green-50 border-green-300";
  }

  return (
    <div
      className={`flex gap-2 items-center py-1.5 px-3.5 ${messageStyle} border rounded-md`}
    >
      {<Icon name={notificationIcon} />}
      <p>{message}</p>
    </div>
  );
}
export default StoreNotification;
