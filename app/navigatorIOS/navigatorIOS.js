import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    TouchableHighlight,
} from 'react-native';


import Home from './Home';

export default class NavigatorIOSDemo extends React.Component{

    render() {
        return(
            <View style={{flex: 1}}>

                <NavigatorIOS

                    initialRoute={{
                        component: Home, // 要跳转到的页面
                        title: '首页',   // 跳转页面导航标题栏，
                        leftButtonTitle: 'action',
                        onLeftButtonPress: ()=>{
                          alert('左边按钮')
                        },
                        rightButtonSystemIcon: 'done',
                        onRightButtonPress: ()=>{
                          alert('右边按钮')
                        },
                        barTintColor: 'red', // 改变导航条背景颜色
                        navigationBarHidden: false,   // 是否隐藏导航条
                        shadowHidden: true, // 是否要隐藏1px的阴影
                        tintColor: 'blue',  // 改变按钮的颜色
                        titleTextColor: 'pink', //导航栏文字的颜色
                        translucent: true,  // 决定导航条是否半透明
                        passProps: {
                            myProp: 'foo'
                        }
                    }}

                    style={{flex:1}}

                />

            </View>
        )
    }
}
