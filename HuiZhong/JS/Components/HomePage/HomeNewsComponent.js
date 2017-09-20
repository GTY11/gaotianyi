/**
 * Created by gaotianyi on 2017/9/5.
 */
/**
 * Created by gaotianyi on 17/7/24.
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

import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions';

var {width, height} = Dimensions.get('window');

class HomeNews extends Component {

    static get defaultProps() {
        return {
            itemArr: [],

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: '惠众热点'}} style={{height: 29, width: 31}}/>
                <Swiper style={styles.swiper}
                        height={55}
                        horizontal={false}
                        autoplay={true}
                        loop={true}
                        autoplayTimeout={2}
                >


                    {this.renderItemView()}

                </Swiper>


            </View>
        )
    }

    renderItemView() {
        var itemViewArr = [];
        for (var i = 0; i < this.props.itemArr.length; i++) {
            var data = this.props.itemArr[i];
            itemViewArr.push(
                <View key={i} style={{height: 55, width:width - 50}}>
                    <Text style={{marginTop:12, height:40}}>{data.newsTitle}</Text>
                </View>
            )
        }
        return itemViewArr;
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    swiper: {},
})

export default HomeNews;


