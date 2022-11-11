import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Something went wrong...")
                    }
                    return res.json()
                })
                .then(data => {
                    setIsPending(false);
                    setError(null);
                    setData(data);
                })
                .catch(err => {
                    setData(null); 
                    setIsPending(false)
                    setError(err.message);
                })
        }, 1000);
    }, []);
    return { data, isPending, error };
}

export default useFetch;