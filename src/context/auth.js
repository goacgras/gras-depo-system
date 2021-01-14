import { createContext, useReducer } from 'react';
const initialState = {
    token: null
};

const AuthContext = createContext({
    token: null,
    login: (token) => {},
    logout: () => {},
    autoSignin: () => {}
});

if (localStorage.getItem('idToken')) {
    const decodedToken = localStorage.getItem('idToken');

    initialState.token = decodedToken;
    console.log('context if statement');
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                token: action.payload
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                token: null
            };
        }
        default:
            return state;
    }
};

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (token) => {
        localStorage.setItem('idToken', token);
        dispatch({
            type: 'LOGIN',
            payload: token
        });
    };

    const logout = () => {
        localStorage.removeItem('idToken');
        dispatch({
            type: 'LOGOUT'
        });
    };

    const autoSignin = () => {
        const token = localStorage.getItem('idToken');
        dispatch({
            type: 'LOGIN',
            payload: token
        });
        console.log('TOKEN IS ', token);
    };

    return (
        <AuthContext.Provider
            value={{ token: state.token, login, logout, autoSignin }}
            {...props}
        />
    );
};

export { AuthContext, AuthProvider };
