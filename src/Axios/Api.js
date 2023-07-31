import axios from "axios";
axios.defaults.baseURL = 'https://backend2023-eta.vercel.app/api';
axios.interceptors.request.use(
config => {
const token = localStorage.getItem("CC_Token")
if (token) {
config.headers['Authorization'] = 'Bearer ' + token;
}
return config;
},
error => {
Promise.reject(error)
});
export default axios;