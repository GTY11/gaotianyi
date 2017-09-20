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
} from 'react-native';


class NearPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{URL_HOST}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})


export default NearPage;
