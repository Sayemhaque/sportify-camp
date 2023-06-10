import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Instructor from "./Instructor/Instructor";
import PopularClasses from "./popular classes/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
          <Slider/>
          <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Instructor</h1>
          <Instructor/>
          <h1 className="text-center text-xl font-bold font-mono mt-6">Popular Classes</h1>
          <PopularClasses/>
        </div>
    );
};

export default Home;