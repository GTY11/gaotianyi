/**
 * Created by gaotianyi on 2017/9/20.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    AsyncStorage,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import Login from '../Components/LoginAndRegister/Login';
class HZTabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
        };
    }

    render() {
        return (
            <TabNavigator>
                {this._createTabbarItem(1, "首页")}
                {this._createTabbarItem(2, "分类")}
            </TabNavigator>


        );
    }

    _createTabbarItem(id, title) {
        switch (id) {
            case 1: {
                return (
                    <TabNavigator.Item
                        title={title}
                        selectedTitleStyle={{color: 'rgb(255,91,61)'}}
                        renderIcon={() => <Image source={{uri: 'home'}} style={styles.iconImgStyle}/>} //图标
                        renderSelectedIcon={() => <Image source={{uri: 'home_selected'}}
                                                         style={styles.iconImgStyle}/>}
                        selected={this.state.selectedTab == 'Home'}
                        titleStyle={styles.textStyle}
                        onPress={() => this.setState({selectedTab: 'Home'})}>
                        <HomePage {...this.props}/>
                    </TabNavigator.Item>
                )
            }
            case 2: {
                return (
                    <TabNavigator.Item
                        title={title}
                        selectedTitleStyle={{color: 'rgb(255,91,61)'}}
                        renderIcon={() => <Image source={{uri: 'catalog'}} style={styles.iconImgStyle}/>} //图标
                        renderSelectedIcon={() => <Image source={{uri: 'catalog_selected'}}
                                                         style={styles.iconImgStyle}/>}
                        selected={this.state.selectedTab == 'Catalog'}
                        titleStyle={styles.textStyle}
                        onPress={() => {
                            this._tabbarItemSelected(id)
                        }}>
                        <CatalogPage {...this.props}/>
                    </TabNavigator.Item>
                )
            }
        }
    }

    _tabbarItemSelected(id) {
        var aa = null;

        AsyncStorage.getItem("x-access-token", function (errs, result) {
            if (!errs) {
                if (result == null) {
                    // alert('result === null');

                } else {
                    // alert(result);
                    aa = result;
                }

            } else {
                alert(id);
            }

        });
         if (aa != null){
             this.setState({
                 selectedTab:'Catalog'
             })
         }else
         {
             this._navigate("aa","Bottom")
         }
    }

    _navigate(name, type = 'Normal') {
        // alert(type);
        this.props.navigator.push({
            component: Login,
            type: type

        })
    }

}

const styles = StyleSheet.create({
    iconImgStyle: {
        width: Platform.OS == 'ios' ? 30 : 25,
        height: Platform.OS == 'ios' ? 30 : 25,
    },

})


export default HZTabbar;