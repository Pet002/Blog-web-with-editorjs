import React, { useEffect, useState } from "react";
import { GetBlog } from "../../services/blog/httpRequrest";

const Post = () => {
    const [data, setData] = useState([]);

    // function get data
    const getBlog = async () => {
        let res = await GetBlog();
        setData(res.data);
    };

    useEffect(() => {
        getBlog();
    }, []);

    const test = () => {
        console.log(data);
    };

    return (
        <div className="container mx-1">
            <h1 className="font-bold text-5xl">Post</h1>
            <p>Hello</p>
            <button onClick={test}>New Data</button>
            {
                data.map((item) => (
                    <div className="unreset" dangerouslySetInnerHTML={{__html: item.detail}} />
                ))
            }
        </div>
    );
};

export default Post;
