import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

import { useGetData } from "../../../hooks/useGetData";
const Reviews = () => {
  const {data: reviews = []} = useGetData('reviews',["reviews"])
  console.log(reviews)
    return (
       <div className="text-center md:max-w-3xl mx-auto py-12">
        <h3 className="text-3xl text-center font-bold mb-8">Reviews</h3>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="p-12"
      >
       {reviews.map(review => <SwiperSlide className="bg-base-200 px-202 p-12 text-center space-y-3" key={review._id}>
        <div className="flex flex-col space-y-5">
        <img className="w-12 h-12 rounded-full mx-auto mt-5" src={review.image} alt="" />
        <p className="text-xl font-bold text-orange-300">{review.name}</p>
        <p>Rating:{review.rating}</p>
        <p>{review.comment}</p>
        </div>
       </SwiperSlide>)}
        
      </Swiper>
    </div>
    );
};

export default Reviews;