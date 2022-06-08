import { useEffect, useState } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;

