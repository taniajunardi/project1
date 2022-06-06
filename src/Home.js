import {useState,useEffect} from 'react';
import Bloglist from './blogList';
const Home = () => {
    const [blog,setBlog] = useState([
        { title : 'Bandung', body : 'dajskdkaskd', author : 'dora', id:1},
        { title: 'Jakarta', body: 'dajskdkaskd', author: 'diego', id: 2 },
        { title: 'Bali', body: 'dajskdkaskd', author: 'boots', id: 3 },
    ])
    const handleDelete = (id) => {
        const newBlog = blog.filter(blog => blog.id!==id);
        setBlog(newBlog);
    }
    

    useEffect(()=>{
        console.log("ran");
    },[]);
  
    return (
        <div className="home">
            <Bloglist blog={blog} title="All blogs" handleDelete={handleDelete} />
        </div>
      );
}
 
export default Home;
