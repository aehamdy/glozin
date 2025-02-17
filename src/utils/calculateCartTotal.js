const calculateCartTotal = (cartList) => {
    const totalPrice = Array.isArray(cartList) ? cartList.reduce((acc, curr) => acc + curr.price * curr.orderQuantity, 0) : cartList.price;
    return totalPrice.toFixed(2);
};

export default calculateCartTotal;