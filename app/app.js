import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Demo from './demo';
import Touchable from './Touchable_demo/Touchable';
import QQLogin from './QQLogin_demo/login';
import ScrollViewDemo from './ScrollView_demo/scrollView'
import FocusPicture from './focusPicture_demo/focusPicture'

import ListViewDemo from './ListView_demo/ListView'
import ListView9GridDemo from './ListView_demo/ListView_9grid'
import TabBarDemo from './TabBarIOS_demo/TabBarIOS_demo'

import icons from './Assets/icons'

// 定义根组件
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Demo/>*/}
                {/*<Touchable/>*/}
                {/*<QQLogin/>*/}
                {/*<ScrollViewDemo/>*/}
                {/*<FocusPicture/>*/}
                {/*<ListViewDemo/>*/}
                {/*<ListView9GridDemo/>*/}
                <TabBarDemo/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // 手机系统自带的菜单栏有22px长度
        marginTop: 22,
    }
});
export {App as default}