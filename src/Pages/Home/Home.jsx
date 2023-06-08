import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Instructor from "../Instructor/Instructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
          <Slider/>
          <h1 className="text-center text-xl font-bold font-mono">Popular Instructor</h1>
          <Instructor/>
        </div>
    );
};

export default Home;