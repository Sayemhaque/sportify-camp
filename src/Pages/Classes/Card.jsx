/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../Provider/ThemeProvider";
import { postRequest } from "../../utils/CRUD";
import { FirebaseAuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import Swal from "sweetalert2";

const Card = ({ Class }) => {
  const { user } = useContext(FirebaseAuthContext)
  const { _id, image, className, seats, instructor, price } = Class;
  const { isDarkMode } = useContext(ThemeContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const student = !isAdmin && !isInstructor;
  console.log(student)

  const navigate = useNavigate()

  const handleSelect = async () => {
    if (!user) {
      return navigate('/login')
    }
    const data = { classId: _id, image, instructor, className, seats, price, email: user?.email }
    try {
      const res = await postRequest(`select`, data)
      if (res.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'class seleted successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'This class is already selected',
      });
    }
  }
  return (
<div className={`card w-full  shadow-xl ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-orange-300'} ${seats < 1 && "bg-red-500 text-white"}`}>
      <figure><img className="h-[300px] w-full object-cover" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{className}</h2>
        <p className="font-bold text-xl">{instructor}</p>
        <p className="font-semibold">Available Seat:{seats}</p>
        <p className="font-semibold ">Price:<span className="text-sm">{price}$</span></p>
        <div className="mt-4">
          <button className={`bg-white px-5 py-2 font-bold  rounded-md disabled:bg-opacity-60 disabled:cursor-not-allowed ${isDarkMode ? "text-black" : ""}`} disabled={!student || seats < 1} onClick={handleSelect}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;