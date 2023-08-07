import Card from "./Card";
import { data } from "./data";

const Blog = () => {
    return (
       <div>
         <h1 className="text-center text-2xl md:text-4xl py-2 mt-6 font-serif md:w-4/12 mx-auto  border border-b-4">Blog</h1>
        <div className="md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:py-12  gap-5 px-5">
            {data.map(blog =>
                 <Card key={blog.title} blog={blog}/>)
                 }
        </div>
       </div>
    );
};

export default Blog;