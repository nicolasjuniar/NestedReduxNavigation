import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import {changeScreen} from "./Action";

class ThirdScreen extends Component {

    onButtonPress = async () => {
        await this.props.changeScreen('second')
        await this.props.navigation.replace('second')
    }

    render() {
        return (
            <View>
                <Button title={'go back'} onPress={this.onButtonPress}/>
                <Text>this is third screen</Text>
            </View>
        )
    }
}

export default connect(null, {changeScreen})(ThirdScreen)
