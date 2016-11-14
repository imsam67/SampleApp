import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.windowUi, action) => {
    
    switch (action.type) {

        case types.SET_WINDOW_UI: 
            return Object.assign({}, state, {
                width :         action.windowUi.width,
                height:         action.windowUi.height,
                isLandscape:    action.windowUi.isLandscape,
                isMobile :      action.windowUi.isMobile,
                isTablet :      action.windowUi.isTablet,
                isDesktop :     action.windowUi.isDesktop    
            })
        default: 
            return state
    }  
};