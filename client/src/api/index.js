import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); 

export const fetchLetters = () => API.get('/letters');
export const createLetter = (newLetter) => API.post('/letters', newLetter);
export const updateLetter = (id, updatedLetter) => API.patch(`/letters/${id}`, updatedLetter);
export const deleteLetter = (id) => API.delete(`/letters/${id}`);

export const signIn = (formData) => API.post('/users/signIn', formData);
export const signUp = (formData) => API.post('/users/signUp', formData);