import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

/**
 * funzione per la configurazione iniziale dello Store di Redux
 */
export default function ConfigureStore(initialState){
    return createStore(rootReducer, 
                        initialState, 
                        applyMiddleware(thunk)
            );
}
