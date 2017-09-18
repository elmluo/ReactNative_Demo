import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    ScrollView
} from 'react-native';

// ES5创建类的写法
export default React.createClass({
    // 定义类（组件）固定不可变得数据
    getDefaultProps() {
        return {
        }
    },

    // 定义类（组件）需要改变的数据
    getInitialState() {
        return {
        }
    },

    /**
     * 一般ScrollView，需要有一个确定的高度才能滚动工作
     * 一、ScrollView必须要有一个高度才能工作
     *  1.直接给ScrollView进行高度的设置（不建议）,应该给里面的内容设置高度。
     *  2.ScrollView中不要加{flex：1}
     * 二、ScrollView内部的其他响应者尚且无法阻止ScrollView本身成为响应者
     *  1.它的响应应该是在最上层的。
     * @returns {XML}
     */

    render() {
        return (
            <View style={scrollViewStyles.container}>
                <Text>scrollView</Text>
            </View>
        )
    },
})

let scrollViewStyles = new StyleSheet.create({
   container: {
       flex: 1,
       justifyContent:'center',
       alignItems:'center'
   }
});
