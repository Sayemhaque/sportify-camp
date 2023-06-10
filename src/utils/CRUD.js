import axios from "axios";
const token = localStorage.getItem('token')
const image_hosting_key = import.meta.env.VITE_imgbbApiKey

const postRequest = async (route, data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/${route}`, data)
  console.log(res.data)
  return res
}

const patchRequest = async (route) => {
  const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/${route}`)
  console.log(res)
  return res
}



const postRequestJWT = async (route, data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/${route}`, data,
    { headers: { authorization: `baerer ${token}` } }
  )
  console.log(res)
  return res.data
}

const makeAdmin = (route) => {
   return axios.put(`${import.meta.env.VITE_BASE_URL}/${route}`)

}

const makeInstructor = (route) => {
     return axios.put(`${import.meta.env.VITE_BASE_URL}/${route}`)
}

const approveAClass = async (route) => {
  const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/${route}`)
  console.log(res)
  return res.data;
}

const denyAClass = (route) => {
  const res = axios.patch(`${import.meta.env.VITE_BASE_URL}/${route}`)
  console.log(res.data)
  return res.data;
}


const uploadImage = async (image) => {
  const url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
  const formData = new FormData()
  formData.append('image', image)
  const res = await axios.post(url, formData)
  const imageURL = res.data.data.display_url
  return imageURL
}

export { postRequest, uploadImage, postRequestJWT, makeAdmin, makeInstructor, approveAClass, denyAClass, patchRequest };