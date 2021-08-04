import axios from "axios"

    const axiosInstance = axios.create({BASE_URL: process.env.NODE_ENV === "production"
    ? "http:/myApp"
    : "/localhost:3030/api"})

export const login = async(data)=> {
    return await axiosInstance.post('/auth/login', data);

}

export const signup= async (data) => {
    return await axiosInstance.post('/auth/signup', data);
  
}

