import {CHANGE_SCREEN} from "./Constants";

export const changeScreen = screenName => {
    return {
        type: CHANGE_SCREEN,
        payload: screenName
    }
}
