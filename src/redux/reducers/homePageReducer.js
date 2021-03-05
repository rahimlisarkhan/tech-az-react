import * as type from '../types';

let initialState = {
    homePage: {
        disableInput:false,
        joinUsUser:false,
    },
}

export const homePageReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case type.DISABLE_INPUT_BTN:
            return {...state, homePage:{...state.homePage, disableInput:action.payload}}

        case type.JOIN_US:
            return {...state, homePage:{...state.homePage, joinUsUser:action.payload}}

        default:
            return state;
    }
}