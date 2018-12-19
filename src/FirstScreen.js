import React, {Component} from 'react'
import {View, Button} from 'react-native'
import {connect} from 'react-redux'
import {changeScreen} from "./Action";

class FirstScreen extends Component {

    onButtonPress = () => {
        this.props.changeScreen('third')
    }

    render() {
        return (
            <View>
                <Button title={'normal button'} onPress={this.onButtonPress}/>
            </View>
        )
    }
}

export default connect(null, {changeScreen})(FirstScreen)
