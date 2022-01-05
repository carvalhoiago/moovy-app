import axios from "axios";

export const LocalDBapi = axios.create({
    baseURL: 'http://10.0.2.2:3333'
    //baseURL: 'http://www.omdbapi.com'
})