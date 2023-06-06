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
                  <h1 className={`${isDarkMode ? "mb-5 text-6xl font-bold text-white": "mb-5 text-6xl font-bold text-orange-300"}`}>{item.text}</h1>
                  <p className="mb-5 max-w-md mx-auto font-bold">
                   {item.message}
                  </p>
                  <button className={`${isDarkMode ? "px-8 py-3 rounded-full text-white font-bold shadow-md bg-slate-800 " : "px-8 py-3 rounded-full text-black font-bold shadow-md bg-orange-300 "}`}>
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


