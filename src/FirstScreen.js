import React,{Component} from 'react'
import {View,Button} from 'react-native'

export default class FirstScreen extends Component{
    render(){
        return(
            <View>
                <Button title={'normal button'} onPress={()=>alert('eeee')}/>
            </View>
        )
    }
}
