import { useLocation } from "react-router-dom";
import { patchRequestWithData } from "../../../utils/CRUD";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const FeedBackPage = () => {
    const location = useLocation();
    const id = location.state
    console.log(id)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const feedback = form.feedback.value
        if (feedback === "") {
            return
        }
        const res = await patchRequestWithData(`feedback/${id}`, { feedback })
        if (res.data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Feedback given successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        form.reset()
    }
    return (
        <div>

            <form onSubmit={handleSubmit} className="modal-box mx-auto mt-12">
                <p className="text-xl font-bold mb-2">Feedback</p>
                <textarea placeholder="Feedback.." className="p-5 border border-gray-200" name="feedback" id="" cols="50" rows="10"></textarea>
                <div className="text-center modal-action">
                    <button type="submit" htmlFor={`my-modal-${id}`} className="btn bg-orange-300">
                        send feedback
                    </button>
                </div>
            </form>
        </div>

    );
};

export default FeedBackPage;