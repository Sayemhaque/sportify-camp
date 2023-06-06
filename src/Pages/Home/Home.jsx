import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportifycamp | Home</title>
            </Helmet>
          <Slider/>
        </div>
    );
};

export default Home;