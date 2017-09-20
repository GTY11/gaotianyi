/**
 * Created by gaotianyi on 2017/9/15.
 */


import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    ListView,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');


class RecommendView extends Component {

    //
    static get defaultProps() {
        return {
            item: []
        }
    }

    constructor(props) {
        super(props);
        // this.renderGoodName = this.renderGoodName.bind(this);
        this._rowClick = this._rowClick.bind(this);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })

        this.state = {
            data: ds.cloneWithRows(this.props.item),
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.data}
                renderRow={this.renderRow.bind(this)}
                contentContainerStyle={styles.contentContainerStyle}
            />
        )
    }

    //renderRow
    renderRow(rowData, sectionID, rowID) {
        if (rowID % 2 == 0) {
            if (rowData.isOwnProduct == true) {
                return (
                    <TouchableOpacity onPress={() => {
                        this._rowClick(rowData)
                    }}>
                        <View key={rowID} style={{
                            width: width / 2.0 - 15,
                            height: width / 2.0 - 15 + 61 + 15,
                            marginRight: 5,
                            marginLeft: 10
                        }}>
                            <Image source={{uri: rowData.itemImage}} style={styles.imgStyle}/>
                            <View style={{flexDirection: 'row'}}>
                                <Text numberOfLines={2}
                                      style={{
                                          height: 35,
                                          width: width / 2.0 - 15,
                                          color: 'black',
                                      }}>         {rowData.itemName}</Text>
                                <Text order={0} style={{
                                    position: 'absolute',
                                    left: 1,
                                    top: 1,
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    textAlign: 'center'
                                }}>自营</Text>

                            </View>
                            <View>
                                <Text style={{fontSize: 12}}>送{rowData.scorePercent}积分</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: 5}}>¥{rowData.itemPrice}</Text>
                                <Text style={{textDecorationLine: 'line-through'}}>¥{rowData.itemMarketPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => {
                        this._rowClick(rowData)
                    }}>
                        <View style={{
                            width: width / 2.0 - 15,
                            height: width / 2.0 - 15 + 61 + 15,
                            marginRight: 5,
                            marginLeft: 10
                        }}>
                            <Image source={{uri: rowData.itemImage}} style={styles.imgStyle}/>
                            <Text numberOfLines={2}>{rowData.itemName}</Text>
                            <View>
                                <Text style={{fontSize: 12}}>送{rowData.scorePercent}积分</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: 5}}>¥{rowData.itemPrice}</Text>
                                <Text style={{textDecorationLine: 'line-through'}}>¥{rowData.itemMarketPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        } else {
            if (rowData.isOwnProduct == true) {
                return (
                    <TouchableOpacity onPress={() => {
                        this._rowClick(rowData)
                    }}>
                        <View style={{
                            width: width / 2.0 - 15,
                            height: width / 2.0 - 15 + 61 + 15,
                            marginRight: 10,
                            marginLeft: 5
                        }}>
                            <Image source={{uri: rowData.itemImage}} style={styles.imgStyle}/>
                            <View style={{flexDirection: 'row'}}>
                                <Text numberOfLines={2}
                                      style={{
                                          height: 35,
                                          width: width / 2.0 - 15,
                                          color: 'black',
                                      }}>         {rowData.itemName}</Text>
                                <Text order={0} style={{
                                    position: 'absolute',
                                    left: 1,
                                    top: 1,
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    textAlign: 'center'
                                }}>自营</Text>

                            </View>
                            <View>
                                <Text style={{fontSize: 12}}>送{rowData.scorePercent}积分</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: 5}}>¥{rowData.itemPrice}</Text>
                                <Text style={{textDecorationLine: 'line-through'}}>¥{rowData.itemMarketPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => {
                        this._rowClick(rowData)
                    }}>
                        <View style={{
                            width: width / 2.0 - 15,
                            height: width / 2.0 - 15 + 61 + 15,
                            marginRight: 10,
                            marginLeft: 5
                        }}>
                            <Image source={{uri: rowData.itemImage}} style={styles.imgStyle}/>
                            <Text numberOfLines={2}>{rowData.itemName}</Text>
                            <View>
                                <Text style={{fontSize: 12}}>送{rowData.scorePercent}积分</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: 5}}>¥{rowData.itemPrice}</Text>
                                <Text style={{textDecorationLine: 'line-through'}}>¥{rowData.itemMarketPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }

    }

    renderGoodName() {
        alert('aaaa');
    }


    //itemClick
    _rowClick(item) {
        alert('productId == ' + item.productId);
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
    },
    imgStyle: {
        width: width / 2.0 - 15,
        height: width / 2.0 - 15,
    },


})

module.exports = RecommendView;