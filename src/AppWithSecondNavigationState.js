import {connect} from 'react-redux'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import SecondNavigator from './SecondNavigator'

const Second = reduxifyNavigator(SecondNavigator, 'root')
const mapStateToProps = state => ({
    state: state.secondNav
})
export default connect(mapStateToProps)(Second)
