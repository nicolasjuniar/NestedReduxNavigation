import React from 'react'
import {combineReducers} from "redux";
import FirstNavigator from './FirstNavigator'
import SecondNavigator from './SecondNavigator'

const firstNavReducer = (state, action) => {
    const firstState = FirstNavigator.router.getStateForAction(action, state)
    return firstState || state
}

const secondNavReducer = (state, action) => {
    const secondState = SecondNavigator.router.getStateForAction(action, state)
    return secondState || state
}

const appReducer = combineReducers({
    firstNav: firstNavReducer,
    secondNav: secondNavReducer
})

const rootReducer = (state, action) => (
    appReducer(state, action)
)

export default rootReducer
