import axios from 'axios';

const API = axios.create({ baseURL: 'https://memories-app-backend-i3tz.onrender.com/' });

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);