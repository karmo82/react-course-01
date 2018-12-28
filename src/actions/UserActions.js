import * as actionTypes from './ActionTypes';

export function GetUserLoggedAction(username){
    return {
        type: actionTypes.USER_LOGGED,
        data: username
    }
}

export function SaveLoggedUser(username){
    return (dispatch) => {
        return dispatch(GetUserLoggedAction(username));
    }
}