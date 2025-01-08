import { useEffect, useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

function ProductViewersCount() {
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    generateRandomNumber(setRandomNumber);

    const intervalId = setInterval(() => {
      generateRandomNumber(setRandomNumber);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{randomNumber}</p>;
}
export default ProductViewersCount;
