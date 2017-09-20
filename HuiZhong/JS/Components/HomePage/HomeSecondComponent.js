/**
 * Created by gaotianyi on 2017/9/5.
 */


import React, {Component} from 'react';

import {
    Text,
    Image,
    Platform,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';


var {width, height} = Dimensions.get('window');

class HomeSecondView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSubView()}

            </View>
        )
    }

    renderSubView() {

        var titleArr = [{id: 1, name: "我的推荐", iconName: "我的推荐"}, {id: 2, name: "积分商城", iconName: "积分商城"}, {
            id: 3,
            name: "车房项目",
            iconName: "车房"
        }, {id: 4, name: "惠财富", iconName: "惠财富"}, {id: 5, name: "签到", iconName: "签到"}];
        return (
            <View>{
                titleArr.map(item => {
                    <TouchableOpacity onPress={this._buttonTouch(item.id)}>
                        <View key={item.id} style={styles.innerViewStyle}>
                            <Image source={{uri: item.iconName}} style={{width: 45, height: 45, marginBottom: 3}}/>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                })

            }
            </View>
        )


    }

    _buttonTouch(i) {
        alert(i);
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
        // alignItems: 'center',jn n
    }
})