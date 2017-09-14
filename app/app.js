import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Demo from './demo';

// 定义根组件
class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Demo/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
    }
});
export {App as default}