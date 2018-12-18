import React from 'react'
import {createStackNavigator} from 'react-navigation'
import FirstScreen from './FirstScreen'

const firstNavigator=createStackNavigator({
    first:{
        screen:FirstScreen
    }
})

export default firstNavigator
