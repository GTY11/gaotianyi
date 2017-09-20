/**
 * Created by gaotianyi on 2017/9/20.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
}from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import HZTabbar from './HZTabbar';
class RootView extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    goBack() {
        return NaviGoBack(_navigator);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return (
            <Component navigator={navigator} route={route}/>
        );
    }

    configureScene(route, routeStack) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        } else {
            return Navigator.SceneConfigs.PushFromRight;
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Navigator
                    ref='navigator'
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: HZTabbar,
                        name: 'RootView'
                    }}
                />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }

})

export default RootView;