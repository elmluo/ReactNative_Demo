import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'


export default class Temp extends React.Component{
    render() {
        return(
            <View style={styles.container}>

            </View>
        )
    }
};


let styles = StyleSheet.create({
    container: {
        // 背景颜色
        backgroundColor:'blue',
        flex:1,
        // 对齐方式
        justifyContent:'center',
        alignItems:'center'
    },
});
