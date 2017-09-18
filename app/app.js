import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Demo from './demo';
import QQLogin from './QQLogin_demo/login';
// 定义根组件
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Demo/>*/}
                <QQLogin/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export {App as default}