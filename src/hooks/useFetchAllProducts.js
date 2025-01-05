import { useEffect } from "react";

function useFetchAllProducts(setState) {
    let url = "https://dummyjson.com/products";

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setState(data.products))
        .catch(err => console.error("Error happened: ", err));
    }, []);
        
}

export default useFetchAllProducts;