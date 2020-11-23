import axios from "axios";
import router from "../../router";
import { Toast } from "vant";

const http = axios.create({
    baseURL: "/api/api"
  });

// 请求拦截
http.interceptors.request.use((req)=>{
    return req
})

// 响应拦截
http.interceptors.response.use(res=>{
    return res.data
})

export default http