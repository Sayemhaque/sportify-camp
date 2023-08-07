import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Instructor from "./Instructor/Instructor";
import PopularClasses from "./popular classes/PopularClasses";
import Reviews from "./reviews/Reviews";
import Categories from "../../components/Categories/Categories";
import FAq from "../../components/Faq/Faq";
import Blog from "../../components/Blog/Blog";
import AboutUs from "../../components/About/AboutUs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
            <Slider />
            <AboutUs/>
            <Categories/>
            <div className="py-12  bg-cover bg-center">
                <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Instructor</h1>
                <Instructor />
            </div>
            <div className="py-12">
                <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Classes</h1>
                <PopularClasses />
            </div>
            <Blog/>
            <FAq/>
            <Reviews />
        </div>
    );
};

export default Home;