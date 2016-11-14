import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/rootReducer';

export default function store(initialState){
    return createStore(
        reducer,
        initialState,
        applyMiddleware(thunk)
    );
}