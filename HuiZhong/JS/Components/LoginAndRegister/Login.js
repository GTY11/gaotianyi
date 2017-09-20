/**
 * Created by gaotianyi on 2017/9/18.
 */


import React, {Component} from 'react';
import {
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    AlertIOS,
    StyleSheet,
    View,
}from 'react-native';

import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');

class Login extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                {this.renderNav()}
                {this.renderMainView()}
            </View>
        )

    }

    //renderNav
    renderNav() {
        return (
            <View style={styles.naviBarStyle}>
                <TouchableOpacity onPress={() => {
                    this.props.navigator.pop();
                }}>
                    <View>
                        <Text style={styles.backStyle}>返回</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{marginRight: 12, marginTop: 12, fontSize: 16, color: 'white'}}>登录</Text>
                </View>
                <View></View>
            </View>
        )
    }

    //renderMainView 整个登录注册的View
    renderMainView() {
        return (
            <View>
                <View style={styles.headerStyle}>
                    <Image source={{uri: '形状-1'}} style={styles.imageStyle}/>
                </View>
                <TextInput
                    multiline={true}
                    style={styles.textInputStyle}
                />
                <TextInput
                    multiline={true}
                    style={styles.textInputStyle}/>
                <Text style={styles.loginButtonStyle}>登录</Text>
                <View style={styles.bottomViewStyle}>
                    <Text style={styles.bottomTextStyle}>忘记密码</Text>
                    <Text style={styles.bottomTextStyle}>立即注册</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    naviBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        backgroundColor: 'rgb(255,91,61)',
    },
    headerStyle: {
        alignItems: 'center',

    },
    imageStyle: {
        width: 60,
        height: 60,
        marginTop: 40,
        marginBottom: 50,

    },
    textInputStyle: {
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        width: width - 24,
        marginLeft: 12,
        marginTop: 8,
        marginBottom: 8,
    },


    loginButtonStyle: {
        backgroundColor: 'rgb(245,63,37)',
        height: 35,
        color: 'white',
        width: width - 24,
        marginLeft: 12,
        fontSize: 16,
        padding: 12,
        borderRadius: 12,
        textAlign: 'center'
    },
    bottomViewStyle: {
        marginTop: 12,
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    bottomTextStyle: {
        margin:12,
    },
})


export default Login;