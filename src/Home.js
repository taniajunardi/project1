import {useState} from 'react';
const Home = () => {
    const [blog,setBlog] = useState([
        { title : 'Bandung', body : 'dajskdkaskd', author : 'dora', id:1},
        { title: 'Jakarta', body: 'dajskdkaskd', author: 'diego', id: 2 },
        { title: 'Bali', body: 'dajskdkaskd', author: 'boots', id: 3 },
    ])

    return (
        <div className="home">
            {blog.map(blogs => (
                <div className="blogName" key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                </div>

            

            ))}
         
           
        </div>
      );
}
 
export default Home;
