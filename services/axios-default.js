import axios from "axios";
import { getSession } from 'next-auth/client';

const axiosDefault = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.interceptors.request.use(async (config) => {
        const session = await getSession();
        if(session) {
          config.headers.Authorization = `Bearer ${session && session.accessToken}`
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
    }, error => Promise.reject(error));
}

export default axiosDefault;