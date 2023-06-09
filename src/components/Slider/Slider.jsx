import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext } from "react"
import { ThemeContext } from "../../Provider/ThemeProvider";
import { useGetData } from "../../hooks/useGetData";

const Slider = () => {
  const { isDarkMode } = useContext(ThemeContext)

  const { data: slider = [] } = useGetData('slider', ["slider"])
  console.log(slider)
  return (
    <Carousel className="">
      {slider.map((item) => (
        <div key={item.id}>
          <div
            className="hero min-h-[80vh]"
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


