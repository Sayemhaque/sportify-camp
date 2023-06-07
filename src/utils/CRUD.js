import axios from "axios";


const postRequest = async (endpoint,data)  => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/${endpoint}`,data)
  return res
}


export {postRequest}; 