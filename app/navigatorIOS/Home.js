import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import Temp from './Temp'

export default class Home extends React.Component{
    render() {
        return(
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => {this.props.navigator.push({     // 将路由push到父组件的导航组件中
                        component:Temp,        // 需要跳转的页面
                        title:'Temp页'        // 跳转到Temp页面导航栏标题
                    })}}
                >
                    <Text>点击跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }
};


let styles = StyleSheet.create({
    container: {
        // 背景颜色
        backgroundColor:'yellow',
        flex:1,
        // 对齐方式
        justifyContent:'center',
        alignItems:'center'
    },
});
