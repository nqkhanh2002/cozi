import * as api from '../api/index.js';

export const getLetters = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLetters();
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createLetter = (letter) => async (dispatch) => {
    try {
        const { data } = await api.createLetter(letter);
        dispatch({
            type: 'CREATE',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}