import axios from "axios";
const token = localStorage.getItem('token')
const image_hosting_key = import.meta.env.VITE_imgbbApiKey

const postRequest = async (endpoint,data)  => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/${endpoint}`,data)
  return res
}

const addClass = (endpoint,data) => {
  const res = axios.post(`${import.meta.env.VITE_BASE_URL}/${endpoint}` , data,
   {headers:{authorization:`baerer ${token}`}}
  )
  return res.data
}
 


const uploadImage = async (image) => {
  const  url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
        const formData = new FormData()
        formData.append('image' , image)
        const res = await axios.post(url, formData)
        const imageURL = res.data.data.display_url
        return imageURL
}

export {postRequest,uploadImage,addClass};