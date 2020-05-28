import React, { useState, useEffect } from "react";
import axios from "axios";

function InputSearch(props) {
    const [posts, setPosts] = useState([]);
    var query = window.location.href.replace(
        "http://localhost:3000/search/user/",
        ""
    );

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/" + query)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // axios.post("http://18.189.174.99:3000/search",{
        //     "query":query
        // })
        // .then((res) => {
        //             console.log(res);
        //             setPosts(res.data);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
    
    }, []);

    return (
        <div>
            <h2>This is your posts</h2>
            <h2>{query}</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default InputSearch;
