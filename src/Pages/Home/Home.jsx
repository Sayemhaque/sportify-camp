import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Instructor from "./Instructor/Instructor";
import PopularClasses from "./popular classes/PopularClasses";
import Reviews from "./reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
          <Slider/>
          <div className="py-12 bg-base-200">
          <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Instructor</h1>
          <Instructor/>
          </div>
         <div className="py-12">
         <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Classes</h1>
          <PopularClasses/>
         </div>
         <Reviews/>
        </div>
    );
};

export default Home;