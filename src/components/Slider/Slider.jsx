import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext } from "react"
import { ThemeContext } from "../../Provider/ThemeProvider";
import { useGetData } from "../../hooks/useGetData";
import { Typewriter } from "react-simple-typewriter";

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
                <h1 className={`mb-8 text-5xl md:text-6xl font-bold text-white`}>
                <Typewriter
                words={[item.text]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
                <p className="mb-5  max-w-lg mx-auto font-bold text-[14px] md:text-md">
                  {item.message}
                </p>
                <button className={`px-8 py-3 rounded-full mt-5 font-bold shadow-md  
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


