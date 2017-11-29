import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducers/reducers';



export const store = createStore(reducer,
    applyMiddleware(thunk));

