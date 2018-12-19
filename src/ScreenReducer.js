import {CHANGE_SCREEN} from "./Constants";

const initialState = {
    screenName: 'second'
}

const screenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SCREEN: {
            console.log('payload: ' + action.payload)
            return {
                ...state,
                screenName: action.payload
            }
        }
        default:
            return state
    }
}

export default screenReducer
