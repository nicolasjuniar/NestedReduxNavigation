import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ThirdScreen extends Component{
    render(){
        return(
            <View>
                <Button title={'go back'} onPress={()=>this.props.navigation.replace('second')}/>
                <Text>this is third screen</Text>
            </View>
        )
    }
}
