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

// import ListViewDemo from './ListView_demo/ListView'
import ListView9GridDemo from './ListView_demo/ListView_9grid'

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
                <ListView9GridDemo/>
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