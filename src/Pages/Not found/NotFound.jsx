import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="relative">
            <img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
            <Link to="/">
                <button className="absolute left-1/2  bottom-10 bg-orange-300 btn">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;