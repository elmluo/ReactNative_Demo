import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Demo from './demo';
import Touchable from './Touchable_demo/Touchable';
import QQLogin from './QQLogin_demo/login';
import ScrollViewDemo from './scrollView_demo/scrollView'
// 定义根组件
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Demo/>*/}
                {/*<Touchable/>*/}
                {/*<QQLogin/>*/}
                <ScrollViewDemo/>

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