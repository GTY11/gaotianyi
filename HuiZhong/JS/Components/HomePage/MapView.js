/**
 * Created by gaotianyi on 2017/9/12.
 */
// MapView.js

import React, {Component, PropTypes}  from 'react';

import {requireNativeComponent} from 'react-native';
var RNMap = requireNativeComponent('RNMap', MapView);
export default class MapView extends Component {
    static propTypes = {
        pitchEnabled: PropTypes.bool,
    };

    render() {
        return <RNMap {...this.props}/>
    }

}
// requireNativeComponent 自动把这个组件提供给 "RNTMapManager"
module.exports = requireNativeComponent('RNTMap', MapView);