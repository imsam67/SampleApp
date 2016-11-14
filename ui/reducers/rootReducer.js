import {combineReducers} from 'redux';
import app from './appReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
    app,
    ui
});

export default rootReducer;