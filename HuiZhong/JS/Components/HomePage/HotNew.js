/**
 * Created by gaotianyi on 2017/9/12.
 */


import React, {Component, PropTypes} from 'react';
import {requireNativeComponent} from 'react-native';

var RNMap = requireNativeComponent('RNMap', GBTopLineView);


//requireNativeComponent 自动把这个组件提供给"RNMapManager"
module.exports = requireNativeComponent('RNMap', null);
