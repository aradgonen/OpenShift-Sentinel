import {CHANGE_THEME, lightMode } from "../actions/theme-types";

const themeMode = JSON.parse(localStorage.getItem("themeMode"));
const initialState = themeMode
? { mode:  themeMode}
: { mode: lightMode };

//const initialState = {mode: lightMode}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case CHANGE_THEME: {
            localStorage.setItem("themeMode", JSON.stringify(payload));
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