import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';

// 获取物理设备宽度
let {width, height} = Dimensions.get('window');

export default class QQLogin extends React.Component{
    render() {
        return(
            <View style={loginStyles.container}>

                {/*头像*/}
                <Image source={require('./img/icon.png')}
                       style={loginStyles.icon}
                />
                {/*帐号和密码*/}
                <TextInput style={loginStyles.textInput}
                           placeholder={'请输入用户名'}
                           autoFocus={true}
                           // caretHidden={true}
                           // defaultValue={'请输入用户名'}
                           editable={true}
                           // keyboardType={'numeric'}
                           // keyboardType={'default'}
                           // keyboardType={'email-address'}
                           // keyboardType={'phone-pad'}
                />
                <TextInput placeholder={'请输入密码'}
                           style={loginStyles.textInput} password={true}/>
                {/*登录*/}
                <View style={loginStyles.toLogin}>
                    <Text style={{color: '#FFFFFF'}}>登录</Text>
                </View>
                {/*设置*/}
                <View style={loginStyles.setting}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={loginStyles.otherLoginMethod}>
                    <Text>其他登录方式：</Text>
                    <Image source={require('./img/icon3.png')}
                           style={loginStyles.itemImage}/>
                    <Image source={require('./img/icon7.png')}
                           style={loginStyles.itemImage}
                    />
                    <Image source={require('./img/icon8.png')}
                           style={loginStyles.itemImage}/>
                </View>

            </View>
        )
    }
}

let loginStyles = new StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'white',
        marginTop: 50,
        marginBottom: 30
    },
    textInput: {
        height: 38,
        width: width,
        // 内容居中，
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#dddddd',
        // borderRadius: 10,
        // shadowRadius: 5,
        shadowColor: 'blue',
    },
    toLogin: {
        height: 35,
        width: width*0.8,
        backgroundColor: 'blue',
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    setting: {
        width: width*0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    otherLoginMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 20,
    },
    itemImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 5,
    }
});