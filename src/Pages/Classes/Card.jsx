/* eslint-disable react/prop-types */
import {useContext} from "react"
import { ThemeContext } from "../../Provider/ThemeProvider";


const Card = ({Class }) => {
    const {image,className,seats,instructor,price} = Class;
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div className={`card w-full  shadow-xl ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-orange-300'}`}>
  <figure><img className="h-[300px] w-full object-cover" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{className}</h2>
   <p className="font-bold text-xl">{instructor}</p>
    <p className="font-semibold">Available Seat:{seats}</p>
    <p className="font-semibold ">Price:<span className="text-sm">{price}$</span></p>
    <div className="mt-4">
    <button className={`bg-white px-5 py-2 font-bold rounded-md ${isDarkMode ? "text-black" : ""}`}>Select</button>
  </div>
  </div>
  
</div>
    );
};

export default Card;