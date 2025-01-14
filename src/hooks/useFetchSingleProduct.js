import { useEffect, useState } from "react"

export const useFetchSingleProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        if(!id) return;
        
        setLoading(true);
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
            setProduct(data);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        })
    }, [id]);

    return { product, loading, error };
};