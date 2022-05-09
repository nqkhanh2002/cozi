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

export const updateLetter = (id, Letter) => async (dispatch) => {
    try {
      const { data } = await api.updateLetter(id, Letter);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  

export const deleteLetter = (id) => async (dispatch) => {
    try {
        await api.deleteLetter(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};
  