/**
 * Created by gaotianyi on 2017/9/15.
 */


import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


class GoodsCommonCell extends Component {

    static get defaultProps() {
        return {
            item: {}
        }

    }


    render() {
        // console.log(this.props.item.);
        alert(this.props.item.isOwnProduct);

    }

}

module.exports = GoodsCommonCell;
