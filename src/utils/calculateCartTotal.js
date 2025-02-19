const calculateCartTotal = (cartList) => {
    const totalPrice = Array.isArray(cartList) ? cartList.reduce((acc, curr) => acc + curr.price * curr.orderQuantity, 0) : cartList.price;
    return totalPrice;
};

export default calculateCartTotal;