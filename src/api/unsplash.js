import axios from 'axios';
import { config } from '../data/config-properties';

const unsplashApi = axios.create({
    baseURL: config.unsplash.END_POINT,
    headers:{
        Authorization: 'Client-ID ' + config.unsplash.AUTH_KEY
    }
})

export default unsplashApi;