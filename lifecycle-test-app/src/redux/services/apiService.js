import axios from 'axios';

export const get = (url) =>{
    return axios.get(url)
}

export const postData = (req) =>{
    return axios.post(req.url,{
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(req.data)
    })
}

export const putData = (req) =>{
    return axios.put(req.url,req.data)
}