const calculateCartTotal = (cartList) => {
    return cartList.reduce((acc, curr) => acc + curr.price * curr.orderQuantity, 0);
};

export default calculateCartTotal;