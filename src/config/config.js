import axios from "axios";

let API_URL = 'http://localhost:4444/api';

 export var AxiosInstance = axios.create({
    baseURL: API_URL
  });