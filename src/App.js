import React, {Component} from 'react';
import Store from "./Store";
import AppWithFirstNavigationState from './AppWithFirstNavigationState'
import AppWithSecondNavigationState from './AppWithSecondNavigationState'
import {Provider} from "react-redux";
import {View} from 'react-native'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex: 1}}>
                <Provider store={Store}>
                    <AppWithFirstNavigationState/>
                    <AppWithSecondNavigationState/>
                </Provider>
            </View>
        );
    }
}
