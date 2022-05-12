import * as api from '../api/index.js';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({
            type: 'AUTH',
            data,
        });
        navigate('/', {state: { auth: true }});
    } catch (error) {
        dispatch({
            type: 'ERR',
            data: error.response.data.message,
        });
        console.log(error.message);
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({
            type: 'AUTH',
            data,
        });
        navigate('/', {state: { auth: true }});
    } catch (error) {
        dispatch({
            type: 'ERR',
            data: error.response.data.message,
        });
        console.log(error.message);
    }
}