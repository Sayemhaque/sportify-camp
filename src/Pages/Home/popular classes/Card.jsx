/* eslint-disable react/prop-types */
import {useContext} from "react"
import { ThemeContext } from "../../../Provider/ThemeProvider";


const Card = ({Class }) => {
    const {image,className,instructor} = Class;
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div className={`card w-full  shadow-xl ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-orange-300'}`}>
  <figure><img className="h-[300px] w-full object-cover" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl ">{className}</h2>
    <p className="font-semibold"><span className="font-bold">Instructor: </span>{instructor}</p>
  </div>
</div>
    );
};

export default Card;