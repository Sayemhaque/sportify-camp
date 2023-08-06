import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Instructor from "./Instructor/Instructor";
import PopularClasses from "./popular classes/PopularClasses";
import Reviews from "./reviews/Reviews";
import Categories from "../../components/Categories/Categories";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
            <Slider />
            <Categories/>
            <div className="py-12  bg-cover bg-center">
                <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Instructor</h1>
                <Instructor />
            </div>
            <div className="py-12">
                <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Classes</h1>
                <PopularClasses />
            </div>
            <Reviews />
        </div>
    );
};

export default Home;