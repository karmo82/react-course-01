import InitialState from './InitialState';
import * as actionTypes from '../actions/ActionTypes';

export default function placeReducer(state = InitialState.places, action){
    
    switch(action.type){
        case actionTypes.GET_PLACE:
            console.log("placeReducer - GET_PLACE");
            console.log(action.data);
            return {...state, entity: action.data}

        case actionTypes.GET_PLACES:
            console.log("placeReducer - GET_PLACES");
            console.log(action);
            return {...state, list: action.data}
        default: 
            return state;
    }
}