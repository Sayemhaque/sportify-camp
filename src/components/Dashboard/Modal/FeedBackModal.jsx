import {  patchRequestWithData } from "../../../utils/CRUD";

// eslint-disable-next-line react/prop-types
const FeedBackModal = ({id}) => {
   
    const handleSubmit = async (e) => {
      e.preventDefault()
      const form = e.target
      const feedback = form.feedback.value
      const res =  await patchRequestWithData(`feedback/${id}`,{feedback})
      console.log(feedback,res)
      form.reset()
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleSubmit} className="modal-box">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                    <p className="text-xl font-bold mb-2">Feedback</p>
                    <textarea placeholder="Feedback.." className="p-5 border border-gray-200" name="feedback" id="" cols="50" rows="10"></textarea>
                    <div className="text-center modal-action">
                        <button type="submit" htmlFor="my-modal-3" className="btn bg-orange-300">
                            send feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedBackModal;