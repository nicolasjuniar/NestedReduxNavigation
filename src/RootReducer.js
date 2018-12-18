import React from 'react'
import {combineReducers} from "redux";
import FirstNavigator from './FirstNavigator'

const navReducer = (state, action) => {
    const firstState = FirstNavigator.router.getStateForAction(action, state)
    return firstState || state
}

const appReducer = combineReducers({
    nav: navReducer
})

const rootReducer = (state, action) => (
    appReducer(state, action)
)

export default rootReducer
