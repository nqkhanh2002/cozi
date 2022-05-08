import axios from 'axios';

const url = 'http://localhost:5000/letters';

export const fetchLetters = () => axios.get(url);
export const createLetter = (newLetter) => axios.post(url, newLetter);