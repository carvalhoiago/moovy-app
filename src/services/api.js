import axios from "axios";

export const ServerURL = 'http://10.0.2.2:3333'

export const LocalDBapi = axios.create({
    baseURL: ServerURL
    //baseURL: 'http://www.omdbapi.com'
})