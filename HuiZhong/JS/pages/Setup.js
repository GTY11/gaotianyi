/**
 * Created by gaotianyi on 17/7/24.
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {Navigator} from 'react-native-deprecated-custom-components';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import Login from '../Components/LoginAndRegister/Login';

import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
} from 'react-native';


class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
        }
    }

    render() {
        return (
            <TabNavigator key={100}>
                {/*首页*/}
                <TabNavigator.Item
                    title='首页'
                    selectedTitleStyle={{color: 'rgb(255,91,61)'}}
                    renderIcon={() => <Image source={{uri: 'home'}} style={styles.iconImgStyle}/>} //图标
                    renderSelectedIcon={() => <Image source={{uri: 'home_selected'}}
                                                     style={styles.iconImgStyle}/>}

                    onPress={() => {
                        this.setState({
                            selectedTab: 'Home'
                        })
                    }}
                    selected={this.state.selectedTab == 'Home'}
                >
                    <Navigator
                        initialRoute={{name: "首页", component: HomePage}}
                        configureScene={(route, routeStack) => {
                            if (route.type == 'Bottom') {
                                return Navigator.SceneConfigs.FloatFromBottom;
                            } else {
                                return Navigator.SceneConfigs.PushFromRight;
                            }

                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}/>
                </TabNavigator.Item>
                {/*分类*/}
                <TabNavigator.Item
                    title="分类"
                    titleStyle={{color: 'rgb(158,158,158)'}}
                    selectedTitleStyle={{color: 'rgb(255,91,61)'}}
                    renderIcon={() => <Image source={{uri: 'catalog'}} style={styles.iconImgStyle}/>} //图标
                    renderSelectedIcon={() => <Image source={{uri: 'catalog_selected'}}
                                                     style={styles.iconImgStyle}/>}

                    onPress={() => {
                        this.setState({
                            selectedTab: 'Catalog'
                        })
                    }}
                    selected={this.state.selectedTab == 'Catalog'}
                >

                    <Navigator
                        initialRoute={{name: "分类", component: CatalogPage}}
                        configureScene={(route, routeStack) => {
                            if (route.type == 'Bottom') {
                                return Navigator.SceneConfigs.FloatFromBottom;
                            } else {
                                return Navigator.SceneConfigs.PushFromRight;
                            }

                        }}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>
                        }}/>

                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    iconImgStyle: {
        width: Platform.OS == 'ios' ? 30 : 25,
        height: Platform.OS == 'ios' ? 30 : 25,
    },

})
export default Setup;
