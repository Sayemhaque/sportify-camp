import BaseBall from "../../assets/baseball.png";
import Badminton from "../../assets/badminton.png";
import cricket from "../../assets/cricket.png";
import soccer from "../../assets/soccer-player.png";
import tennis from "../../assets/tennis-player-with-racket.png";
const Categories = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 place-items-center py-12">
            <div className="bg-gray-200 p-6">
               <img className="w-[100px] hover:rotate-90 cursor-pointer duration-500" src={BaseBall} alt="" />
            </div>
            <div className="bg-gray-200 p-6">
               <img className="w-[100px] hover:rotate-90 cursor-pointer duration-500" src={Badminton} alt="" />
            </div>
            <div className="bg-gray-200 p-6">
               <img className="w-[100px] hover:rotate-90 cursor-pointer duration-500" src={cricket} alt="" />
            </div>
            <div className="bg-gray-200 p-6">
               <img className="w-[100px] hover:rotate-90 cursor-pointer duration-500" src={soccer} alt="" />
            </div>
            <div className="bg-gray-200 p-6">
               <img className="w-[100px] hover:rotate-90 cursor-pointer duration-500" src={tennis} alt="" />
            </div>
        </div>
    );
};

export default Categories;