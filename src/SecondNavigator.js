import React from 'react'
import {createStackNavigator} from 'react-navigation'
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

const secondNavigator = createStackNavigator({
    second: {
        screen: SecondScreen
    },
    third: {
        screen: ThirdScreen
    }
})

export default secondNavigator
