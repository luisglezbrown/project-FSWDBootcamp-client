import { useEffect, useState } from "react";

const useFetch = (API_URL) => {

    const [results, setResults] = useState()
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setResults(data))
    })

    return results;
}

export {useFetch};