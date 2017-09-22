import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class Mine extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>我是Mine</Text>
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