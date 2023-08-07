/* eslint-disable react/prop-types */
import {FaClock, FaUser} from "react-icons/fa"
const Card = ({blog}) => {
    return (
       <div>
         <div className="card w-full h-full bg-gray-200 shadow-xl">
        <figure><img src={blog.image} className="w-full h-[300px] object-cover" alt="Shoes" /></figure>
        <div className="card-body">
        <p className="text-gray-500 flex items-center gap-2"><FaClock/>{blog.date}</p>
        <p className="text-gray-500 flex items-center gap-2"><FaUser/>{blog.author}</p>
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.content}</p>
          <div className="card-actions justify-start">
            <button className="text-gray-3000 font-bold bg-white px-2 py-1">{blog.category}</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Card;
