import {CHANGE_THEME, lightMode } from "../actions/theme-types";

const initialState = {mode: lightMode}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case CHANGE_THEME: {
            return {
                ...state,
                mode: payload,
            }
        }
        
        default: {
            return state
        }
    }
}