import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogss")
                .then(res => {
                    if (!res.ok) {
                        throw Error("Something went wrong...")
                    } 
                    return res.json()
                })
                .then(data => {
                    setIsPending(false);
                    setError(null);
                    setBlogs(data);
                })
                .catch(err => {
                    console.log("Error")
                    setIsPending(false)
                    setError(err);
                }) 
        }, 1000);
    },[]);
    return (
        <div className="home">
            {error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blog"/>}
        </div>
    );
}
 
export default Home;