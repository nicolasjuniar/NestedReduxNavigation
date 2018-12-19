import {connect} from 'react-redux'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import FirstNavigator from './FirstNavigator'

const First = reduxifyNavigator(FirstNavigator, 'root')
const mapStateToProps = state => ({
    state: state.firstNav
})

export default connect(mapStateToProps)(First)
