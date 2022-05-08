import axios from 'axios';

const url = 'http://localhost:5000/letters';

export const fetchLetters = () => axios.get(url);
export const createLetter = (newLetter) => axios.post(url, newLetter);
export const updateLetter = (id, updatedLetter) => axios.patch(`${url}/${id}`, updatedLetter);
export const deleteLetter = (id) => axios.delete(`${url}/${id}`);
