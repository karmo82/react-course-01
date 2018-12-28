import * as PlaceServices from '../services/PlaceServices';
import * as actionTypes from './ActionTypes';

export function GetPlacesAction(list){
    return {
        type: actionTypes.GET_PLACES,
        data: list
    }
}

export function GetSinglePlaceAction(entity){
    return {
        type: actionTypes.GET_PLACE,
        data: entity
    }
}

export function GetPlaces(){
    return function(dispatch){
        PlaceServices.GetAll().then(
            response => {
                dispatch(GetPlacesAction(response.data));
            },
            error => {
                console.log(error);
            }
        );         
    }
}

export function GetSinglePlace(id){
    return function(dispatch){
        PlaceServices.GetSingle(id).then(
            response => {
                dispatch(GetSinglePlaceAction(response.data))
            },
            error => {
                console.log(error);
            }
        );
    }
}