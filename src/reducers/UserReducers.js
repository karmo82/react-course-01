import InitialState from './InitialState';
import * as actionTypes from '../actions/ActionTypes';

export default function userReducer(state = InitialState.user, action){
    switch(action.type){
        case actionTypes.USER_LOGGED:
            return {...state, username: action.data, isLogged: true}
        default:
            return state;
    }
}