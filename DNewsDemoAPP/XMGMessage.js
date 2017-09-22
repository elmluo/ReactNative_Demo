import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Message extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>我是Message</Text>
            </View>
        )
    }
}

let styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});