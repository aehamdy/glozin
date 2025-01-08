const generateRandomNumber = (setState) => {
    const number = Math.ceil(Math.random() * 20 * 2);
    setState(number < 15 ? number + 10 : number);
};

export default generateRandomNumber;