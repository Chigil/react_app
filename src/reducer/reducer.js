export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, auth: action.data };
        case LOGOUT:
            return {...state, auth: action.data };
        default:
            throw new Error();
    }
};