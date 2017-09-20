/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Setup from './JS/pages/Setup';
import HZNav from './JS/pages/HZNavigation';
import {
    AppRegistry,
} from 'react-native';

export default class pushComponentHiddenTab extends Component {
    render() {
        return (
            <HZNav/>
        )
    }
}


AppRegistry.registerComponent('HuiZhong', () => pushComponentHiddenTab);
