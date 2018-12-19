import React from 'react'
import {createStackNavigator} from 'react-navigation'
import SecondScreen from "./SecondScreen";

const secondNavigator = createStackNavigator({
    second: {
        screen: SecondScreen
    }
})

export default secondNavigator
