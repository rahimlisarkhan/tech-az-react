import axios from 'axios';

export const baseURL = axios.create({
    baseURL:'https://admin.tech.az/api/'
});

