import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class SecondScreen extends Component {

    componentDidUpdate() {
        const {screenName} = this.props
        this.props.navigation.replace(screenName)
    }

    render() {
        return (
            <View>
                <Text>this is second screen</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {screenName: state.screen.screenName}
}

export default connect(mapStateToProps)(SecondScreen)
