
import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'http://localhost:5000/dashapi',
    headers: { 
        'Access-Control-Allow-Origin' : '*',                    //only for development
        'Access-Control-Allow-Methods': "POST, GET, OPTIONS", 
        'Accept': "application/json",
        "Content-Type": "application/json"
    }, 
})