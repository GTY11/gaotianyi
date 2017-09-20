/**
 * Created by gaotianyi on 2017/9/13.
 */


import React, {Component, PropTypes} from 'react';
import {requireNativeComponent} from 'react-native';

//requrieNativeComponent 自动把组件提供给RCTScrollView
var RCTScrollView = requireNativeComponent('TestView', TestView);

export default class TestView extends Component {

    render() {
        return <RCTScrollView {...this.props}/>;

    }


    static propTypes = {
        /*属性类型其实可以不写*/
        hotArray: PropTypes.array,
        onClickBanner: PropTypes.func
    };

}



module.exports = TestView;
