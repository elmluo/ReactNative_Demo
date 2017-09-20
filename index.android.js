/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
// import App from './app/app'
import XMGmain from './DNewsDemoAPP/XMGMain'
export default class reactnative_demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<App/>*/}
                <XMGmain/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('reactnative_demo', () => reactnative_demo);
