import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {applyMiddleware, compose, createStore} from 'redux'
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import RootReducer from './RootReducer'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)

const store = createStore(
    RootReducer,
    compose(applyMiddleware(middleware, thunk, logger)),
)

export default store
