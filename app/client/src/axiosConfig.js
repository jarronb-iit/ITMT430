import axios from "axios";
console.log(process.env);
const instance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN
});

export default instance;
