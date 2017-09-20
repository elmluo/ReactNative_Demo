import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

export default class Message extends React.Component{
    render() {
        return(
            <View>
                <Text>我是Message</Text>
            </View>
        )
    }
}

let styles = new StyleSheet.create({
    container: {
    }
});