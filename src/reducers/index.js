import {combineReducers } from 'redux';
import places from './PlaceReducers';
import user from './UserReducers';

const rootReducer = combineReducers({
    places,
    user
});

export default rootReducer;