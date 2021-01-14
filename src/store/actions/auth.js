import * as actionTypes from './actionTypes';

export const login = (token) => {
    localStorage.setItem('idToken', token);
    return {
        type: actionTypes.AUTH_LOGIN,
        token: token
    };
};

export const logout = () => {
    localStorage.removeItem('idToken');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const tryAutoSignin = () => {
    return (dispatch) => {
        const token = localStorage.getItem('idToken');
        if (!token) {
            dispatch(logout());
        } else {
            dispatch(login(token));
        }
    };
};
