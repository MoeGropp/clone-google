import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "d6a1ef4834dae4296";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
const fetchData = async() => {
    fetch(
        `https://www.googleapis.com/customesearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    )
    .then(response => response.json())
    .then(result => {setData(result)})
}
fetchData();
    }, [term])
return {data}
};

export default useGoogleSearch;