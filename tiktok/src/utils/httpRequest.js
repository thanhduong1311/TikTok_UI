import axios from 'axios'



const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API    ,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async(path, query={}) => {
    const result = await request.get(path, query)
    return result.data
}

export default request