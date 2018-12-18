import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {connect} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers'
import RootReducer from './RootReducer'
import FirstNavigator from './FirstNavigator'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const First = reduxifyNavigator(FirstNavigator, 'root')
const mapStateToProps = state => ({
    state: state.nav
})
const AppWithNavigationState = connect(mapStateToProps)(First)

const store = createStore(
    RootReducer,
    compose(applyMiddleware(middleware, thunk, logger)),
)

export {store, AppWithNavigationState}
