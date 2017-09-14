import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Demo extends React.Component {
    render() {
        return (
            <View style={demoStyles.container}>

                <View style={demoStyles.welcomeStyles}>
                    <Text style={demoStyles.welcomeTitle}>
                        文字样式
                    </Text>
                    <Text>
                        Welcome to 超哥哥的菜场!!
                    </Text>
                    <Text>
                        To get started, edit index.ios.js
                    </Text>
                    <Text>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                </View>
                <View style={flexbox.container}>
                    <View style={[flexbox.item, flexbox.item1]}>
                        <Text style={flexbox.itemText}>1</Text>
                    </View>
                    <View style={[flexbox.item, flexbox.item2]}>
                        <Text style={flexbox.itemText}>2</Text>
                    </View>
                    <View style={[flexbox.item, flexbox.item3]}>
                        <Text style={flexbox.itemText}>3</Text>
                    </View>
                </View>
            </View>
        )
    }
}

let demoStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        borderWidth: 1,
        borderColor: '#6435c9',
        borderRadius: 16,
        shadowColor: '#6435c9',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 6,
            width: 6
        }
    },
    welcomeStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        margin: 15,
    },
    welcomeTitle: {
        fontSize: 26,
        color: '#6435c9',
        textAlign: 'center',
        fontStyle: 'italic',
        letterSpacing: 2,
        lineHeight: 33,
        fontFamily: 'Courier',
        fontWeight: '500',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dashed'
    },
});

let flexbox = StyleSheet.create({
    container: {
        flex: 2,
        // react-native 的flex 和web 的主轴方向视觉上默认相反 默认column
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // justifyContent: 'center',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'center',
        margin: 10,
        padding: 23,
        backgroundColor: '#dddddd'
    },
    item: {
        // 设置子节点的flex：num 可以控制占父节点的比例
        flex: 1,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6
    },
    item1: {
        // alignSelf: 'flex-start'
    },
    item2: {
        // alignSelf: 'center'
    },
    item3: {
        flex: 2,
    },
    itemText: {
        fontSize: 33,
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: '#6435c9',
        padding: 5,
    }
});

export {Demo as default}