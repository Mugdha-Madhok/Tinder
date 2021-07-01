import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-appbackend.herokuapp.com",
});

export default instance;
