import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    AlertIOS,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

// ES5创建类的写法
export default React.createClass({
    // 定义类（组件）固定不可变得数据
    getDefaultProps() {
      return {
          buttonName: '点我改变下面的值'
      }
    },

    // 定义类（组件）需要改变的数据
    getInitialState() {
        return {
            title: '不透明触摸'
        }
    },

    render() {
        return (
            <View ref="topView" style={touchableStyles.container}>
                {/*用这个标签表包裹需要改变的元素*/}
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.handleOnPress()}
                >
                    <Text style={touchableStyles.text}>
                        点我改变透明度123
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('抬起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <Text style={touchableStyles.text}>
                        {this.props.buttonName}
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text style={touchableStyles.text}>
                        {this.state.title}
                    </Text>
                </View>
            </View>
        )
    },

    // 按下触发事件
    handleOnPress() {
        // console.log需要打开浏览器调试模式，打开控制台即可看到
        console.log("按下————————");
        Alert.alert("已经按下了")
        // AlertIOS.alert("已经按下了")
    },

    activeEvent(event) {
        // 更新状态机
        this.setState({
            title: event
        });
    }
})

let touchableStyles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 5,
        borderRadius: 10
    }
});