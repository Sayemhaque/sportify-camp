import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useContext} from "react"
import { ThemeContext } from "../../Provider/ThemeProvider";

const Slider = () => {
    const {isDarkMode } =  useContext(ThemeContext)
    const { data: slider = [] } = useQuery({
        queryKey: ['slider'],
        queryFn: async () => {
            const res = await axios.get("slider.json")
            return res.data.data
        }
    })
    console.log(slider)
    return (
        <Carousel className="">
        {slider.map((item) => (
          <div key={item.id}>
            <div
              className="hero min-h-[70vh]"
              style={{ backgroundImage: `url(${item.picture})` }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-full text-center">
                <h1 className={`mb-5 text-4xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-orange-300"}`}>{item.text}</h1>
                  <p className="mb-5 max-w-lg mx-auto font-bold text-sm md:text-md">
                   {item.message}
                  </p>
                  <button className={`px-8 py-3 rounded-full  font-bold shadow-md  
                   ${isDarkMode ? "bg-slate-800 text-white" : "bg-orange-300 text-black"}`}>
                           Enroll Now
                        </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    );
};

export default Slider;


