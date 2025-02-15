/* eslint-disable react/prop-types */

import {
  SET_ADDRESS,
  SET_APARTMENT,
  SET_CITY,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_ZIP_CODE,
} from "../constants/actionTypes";
import { useUserData } from "../context/UserDataContext";

function FormInput({
  type = "text",
  name,
  id,
  placeholder,
  className,
  required,
  value,
}) {
  const { dispatchUserData } = useUserData();

  const defaultStyles =
    "py-2 px-3 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short";

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // setContact((prev) => ({ ...(prev || {}), [name]: value }));
    if (name === "email") {
      dispatchUserData({ type: SET_EMAIL, payload: value });
    } else if (name === "firstName") {
      dispatchUserData({ type: SET_FIRST_NAME, payload: value });
    } else if (name === "lastName") {
      dispatchUserData({ type: SET_LAST_NAME, payload: value });
    } else if (name === "address") {
      dispatchUserData({ type: SET_ADDRESS, payload: value });
    } else if (name === "apartment") {
      dispatchUserData({ type: SET_APARTMENT, payload: value });
    } else if (name === "city") {
      dispatchUserData({ type: SET_CITY, payload: value });
    } else if (name === "zipCode") {
      dispatchUserData({ type: SET_ZIP_CODE, payload: value });
    }
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${defaultStyles} ${className}`}
      value={value}
      onChange={onChangeHandler}
      required={required && required}
    />
  );
}

export default FormInput;
