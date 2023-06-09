/* eslint-disable react/prop-types */
import {useContext} from "react"
import { ThemeContext } from "../../../Provider/ThemeProvider";

const Card = ({instructor }) => {
    const {image,name,email} = instructor;
    const {isDarkMode} = useContext(ThemeContext)
    return (
        <div className={`card w-full  shadow-xl ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-orange-300'}`}>
  <figure><img className="h-[500px] w-full object-cover" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>Email:{email}</p>
  </div>
</div>
    );
};

export default Card;