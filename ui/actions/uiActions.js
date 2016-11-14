import * as types from './actionTypes';

export const setWindowUi = (windowUi) => {
    return {
        type: types.SET_WINDOW_UI, 
        windowUi
    }
}