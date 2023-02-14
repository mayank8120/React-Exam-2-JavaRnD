import * as api from '../api/index.js';
import { AUTH, SIGNIN, SIGNUP } from '../constants/actionTypes.js';

export const signin = (formData) => async (dispatch) => {
    try {
        const data = await api.signIn(formData);
        data.type = SIGNIN;
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}


export const signup = (formData) => async (dispatch) => {
    try {
        const data = await api.signUp(formData);
        data.type = SIGNUP;
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
}