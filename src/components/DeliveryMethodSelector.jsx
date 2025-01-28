/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Icon from "./Icon";

function DeliveryMethodSelector({ setContact }) {
  const deliveryMethods = [
    {
      method: "Ship",
      icon: "deliveryTruck",
      inputId: "delivery-ship",
      value: "ship",
    },
    {
      method: "Pick in store",
      icon: "store",
      inputId: "delivery-instore",
      value: "pick-in-store",
    },
  ];

  const onInputChange = (e) => {
    setContact((prev) => ({ ...(prev || {}), deliveryMethod: e.target.value }));
  };

  useEffect(() => {
    setContact((prev) => ({
      ...(prev || {}),
      deliveryMethod: deliveryMethods[0].value,
    }));
  }, []);

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <h2 className="font-semibold text-xl text-black">Delivery</h2>

      <ul className="w-full">
        {deliveryMethods.map((method, index) => (
          <li key={index} className="w-full hover:text-blue-500">
            <input
              onChange={onInputChange}
              type="radio"
              value={method.value}
              name="delivery"
              id={method.inputId}
              className="hidden peer"
              defaultChecked={index === 0}
            />
            <label
              htmlFor={method.inputId}
              className={`flex justify-between items-center w-full py-2 px-3 border ${
                index !== 0 && "border-t-0 peer-checked:border-t"
              }
      peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:border-blue-400 
      ${
        index === 0
          ? "rounded-t-lg peer-checked:rounded-t-lg"
          : index === deliveryMethods.length - 1 &&
            "rounded-b-lg peer-checked:rounded-b-lg"
      }
      cursor-pointer transition-all duration-200`}
            >
              <div className="text-secondary-dark">{method.method}</div>
              <Icon name={method.icon} size="18" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DeliveryMethodSelector;
