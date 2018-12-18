import React, {Component} from 'react';
import {AppWithNavigationState, store} from "./Store";
import {Provider} from "react-redux";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
