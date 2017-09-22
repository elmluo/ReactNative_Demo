import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

export default class Find extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>我是Find</Text>
            </View>
        )
    }
}

let styles = new StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});