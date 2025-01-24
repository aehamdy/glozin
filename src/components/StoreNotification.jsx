/* eslint-disable react/prop-types */
function StoreNotification({ alert, message }) {
  let messageStyle;
  if (alert.toLowerCase() === "error") {
    messageStyle = "text-red-800 bg-red-50 border-red-300";
  } else if (alert.toLowerCase() === "success") {
    messageStyle = "text-green-700 bg-green-50 border-green-300";
  }

  return (
    <div className={`py-1.5 px-3.5 ${messageStyle} border rounded-md`}>
      {message}
    </div>
  );
}
export default StoreNotification;
