'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;
var icons  = require('../Assets/icons');
var TabBarExample = React.createClass({
    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.',
    },

    displayName: 'TabBarExample',

    getInitialState: function() {
        return {
            selectedTab: '红色页面', // 默认选中的子页面；
            notifCount: 0,  // 提示的数量统计
            presses: 0,
        };
    },

    _renderContent: function(color: string, pageText: string, num?: number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    },

    render: function() {
        return (
            <TabBarIOS
                unselectedTintColor="white" // 没有选中图标的颜色ios10
                tintColor="pink" // 当前被选中图标的颜色
                translucent={true} // 决定标签栏是否需要半透明化
                barTintColor="darkslateblue" // 标签栏的背景颜色
            >

                <TabBarIOS.Item
                    title="蓝色首页"  // 名称ß
                    icon={{uri: icons.bird, scale: 4.6}}  // 自定义的base64的icon小图标，scale为缩小倍率，越大图标越小
                    badge={'泡泡'}    // 图标右上角的小气泡
                    selected={this.state.selectedTab === '蓝色页面'} // 决定显示的子页面
                    onPress={() => {    // 控制上面selected的状态，显示选中标签的子页面。
                        this.setState({
                            selectedTab: '蓝色页面',
                        });
                    }}
                >
                    {/*对应的子页面*/}
                    {this._renderContent('#414A8C', 'Blue Tab')}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    systemIcon="history"    // 使用系统提供的默认icon
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}   //数量小圆点
                    selected={this.state.selectedTab === '红色页面'}  //是否有选中的效果
                    onPress={() => {
                        this.setState({
                            selectedTab: '红色页面',
                            notifCount: this.state.notifCount + 1,
                        });
                    }}
                >
                    {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./icon7.png')}
                    selectedIcon={require('./icon3.png')}
                    renderAsOriginal
                    title="More"
                    selected={this.state.selectedTab === '绿色页面'}
                    onPress={() => {
                        this.setState({
                            selectedTab: '绿色页面',
                            presses: this.state.presses + 1
                        });
                    }}
                >
                    {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={{uri: icons.bird, scale: 3}}
                    selectedIcon={{uri: icons.bird, scale:3}}
                    renderAsOriginal
                    title="More"
                    selected={this.state.selectedTab === '灰色页面'}
                    onPress={() => {
                        this.setState({
                            selectedTab: '灰色页面',
                            presses: this.state.presses + 1
                        });
                    }}
                >
                    {this._renderContent('#dddddd', 'gray Tab', this.state.presses)}
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    },

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

module.exports = TabBarExample;