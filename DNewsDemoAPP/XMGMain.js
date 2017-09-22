
import Mine from "./XMGMine";

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    NavigatorIOS,
} = ReactNative;

import Home from './XMGHome';
import Discovery from './XMGFind';
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
            selectedTab: 'home', // 默认选中的子页面；
            notifCount: 0,  // 提示的数量统计;
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
                    icon={require('./TabBar/tabbar_home.png')}  // 自动识别@2x/@3x
                    selectedIcon={require('./TabBar/tabbar_home_highlighted.png')}
                    // badge={'泡泡'}    // 图标右上角的小气泡
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                    }}
                >
                    <NavigatorIOS
                        tintColor="orange"
                        style={{flex: 1}}
                        initialRoute={
                            {
                                component: Home,
                                title: '网易',
                                leftButtonIcon:require('./NavigationBar/navigationbar_friendattention.png'),
                                rightButtonIcon:require('./NavigationBar/navigationbar_pop.png')
                            }
                        }
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./TabBar/tabbar_discover.png')}
                    selectedIcon={require('./TabBar/tabbar_discover_highlighted.png')}
                    title='发现'
                    selected={this.state.selectedTab === 'discovery'}  //是否有选中的效果
                    onPress={() => {
                        this.setState({
                            selectedTab: 'discovery',
                        });
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Discovery,
                                title: '发现'
                            }
                        }
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    icon={require('./TabBar/tabbar_message_center.png')}
                    selectedIcon={require('./TabBar/tabbar_message_center_highlighted.png')}
                    renderAsOriginal
                    title="消息"
                    selected={this.state.selectedTab === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'message',
                        });
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Message,
                                title: '消息'
                            }
                        }
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    // icon={require('tabbar_profile.png')}
                    icon={require('./TabBar/tabbar_profile.png')}
                    selectedIcon={require('./TabBar/tabbar_profile_highlighted.png')}
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
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Profile,
                                title: '个人'
                            }
                        }
                        style={{flex: 1}}
                    />
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