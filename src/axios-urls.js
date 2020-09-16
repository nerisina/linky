import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.bely.me/',
    headers: { 'GB-Access-Token' : process.env.REACT_APP_TOKEN_BELY },
});

export default instance;