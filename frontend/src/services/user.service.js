import { httpService } from "./httpService.js";


export const userService = { login, register, logout, update, getEmptyForm };

async function login(username, password) {
  return httpService.post('auth/login', { username, password })
}

async function update(newUser) {
  return httpService.put(`user/${newUser._id}`, newUser)
}
async function register(newUser) {
  return httpService.post(`auth/signup`, newUser)
}

async function logout(refreshToken) {
  return httpService.post(`auth/logout`, { refreshToken })
}

const getEmptyForm = () => {
  return {
    _id: "",
    company: "",
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    postalCode: "",
    about: ""
  };
};


