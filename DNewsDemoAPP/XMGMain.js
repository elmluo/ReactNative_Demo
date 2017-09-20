
import Mine from "./XMGMine";

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;

import Home from './XMGHome';
import Find from './XMGFind';
import Message from './XMGMessage';
import Profile from './XMGMine';

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


    render: function() {
        return (
            <TabBarIOS
                // unselectedTintColor="white"
                tintColor="orange"
                // translucent={true}
                // barTintColor="darkslateblue" // 标签栏的背景颜色
            >

                <TabBarIOS.Item
                    title="首页"
                    icon={require('./TabBar/tabbar_home@3x.png')}
                    selectedIcon={require('./TabBar/tabbar_home_highlighted@3x.png')}
                    badge={'泡泡'}    // 图标右上角的小气泡
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                    }}
                >
                    <Home/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./TabBar/tabbar_discover@3x.png')}
                    selectedIcon={require('./TabBar/tabbar_discover_highlighted@3x.png')}
                    title='发现'
                    selected={this.state.selectedTab === 'discovery'}  //是否有选中的效果
                    onPress={() => {
                        this.setState({
                            selectedTab: 'discovery',
                        });
                    }}
                >
                    <Find/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./TabBar/tabbar_message_center@3x.png')}
                    selectedIcon={require('./TabBar/tabbar_message_center_highlighted@3x.png')}
                    renderAsOriginal
                    title="消息"
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                    }}
                >
                    <Message/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./TabBar/tabbar_profile@3x.png')}
                    selectedIcon={require('./TabBar/tabbar_profile_highlighted@3x.png')}
                    renderAsOriginal
                    title="More"
                    selected={this.state.selectedTab === 'profile'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'profile',
                            presses: this.state.presses + 1
                        });
                    }}
                >
                    <Profile/>
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