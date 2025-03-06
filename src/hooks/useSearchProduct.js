import { useEffect, useState } from "react"
import { BASE_API_URL } from "../config/apiConstants";

const useSearchProduct = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const searchProduct = async () => {
            try {
                const url = `${BASE_API_URL}/products/search?q=${searchInput}`;
                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error("Failed to search products");
                }

                const data = await response.json();

                setSearchList(data.products || []);

            } catch (error) {
                    setIsError(error.message);
            }
        }

            searchProduct();

    }, [searchInput])

    return [searchInput, setSearchInput, searchList, isError];
}

export default useSearchProduct;