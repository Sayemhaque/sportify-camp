/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ThemeContext } from "../../../Provider/ThemeProvider";
import { Fade } from "react-awesome-reveal";


const Card = ({ Class }) => {
  const { image, className, instructor, seats, totalEnroll } = Class;
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <Fade triggerOnce>
      <div className={`card w-full  shadow-xl ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-orange-300'}`}>
        <figure><img className="h-[300px] w-full object-cover" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl ">{className}</h2>
          <p className="font-semibold"><span className="font-bold">Instructor: </span>{instructor}</p>
          <p className="font-semibold"><span className="font-bold">Available seats: </span>{seats}</p>
          <p className="font-semibold"><span className="font-bold">Total Enroll:
          </span>{totalEnroll}</p>
        </div>
      </div>
    </Fade>
  );
};

export default Card;