import { useEffect, useState } from "react"
import { BASE_API_URL } from "../config/apiConstants";

export const useFetchSingleProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        if(!id) return;
        
        setLoading(true);
        const url = `${BASE_API_URL}/products/${id}`;

        fetch(url)
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