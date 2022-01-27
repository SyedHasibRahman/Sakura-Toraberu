import { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch('https://still-bastion-57482.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    console.log(blogs);
    return (
        <div>
            <Header />
            <div className="container">

                <h2 className="py-4">This is Blogs</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    {
                        blogs.map(blog => <Blog
                            key={ blog._id }
                            blog={ blog }
                        ></Blog>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;