import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Alert,
    TouchableOpacity,
    Dimensions,
    RefreshControl,
} from 'react-native';

// 获取屏幕宽度
let {width: screenW} = Dimensions.get('window');

// 一些常量的设置
const cols = 3;
const cellWH = screenW/3;
const margin = (screenW - cellWH*3)/(cols*2);
export default class ViewList9Grid extends React.Component {
    constructor(props) {
        super(props);

        let movies=[
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
            {title: '阿甘正传', text: '￥40'},
        ];

        // 1.创建ViewList数据数据源。
        // 列表组件中判断任意两个item数据是否有变化，如果数据有变化，就触发更新
        let ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        // 初始化状态机
        this.state = {
            dataSource: ds.cloneWithRows(movies),
            isLoading: false,
        };


    }

    renderRow(rowData, sectionID, rowID, hightlightRow) {
        console.log(rowData, sectionID, rowID);
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => {
                                  Alert.alert('点击了第' + rowID + '行')
                              }}>
                <View style={viewListStyles.item}>
                    {/*<View style={viewListStyles.itemImg}>*/}
                    {/*</View>*/}
                    <View style={viewListStyles.itemContent}>
                        <View style={viewListStyles.title}>
                            <Text>{rowData.title}</Text>
                        </View>
                        <View style={viewListStyles.text}>
                            <Text>{rowData.text}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _onRefresh() {
        // 显示加载动画
        this.setState({
            isLoading: true,
        });
        // 三秒钟过后关闭加载动画
        setTimeout(()=> {
            this.setState({
                isLoading: false
            })
        }, 3000)
    }

    render() {
        return (
            <View style={viewListStyles.container}>
                <ListView
                    automaticallyAdjustContentInsets={false}
                    // 必须通过这个属性设置九宫格flexrap导入
                    contentContainerStyle={viewListStyles.listStyle}
                    // 设置网格数量
                    initailListSize
                    pageSize={3}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    showsVerticalScrollIndicator={false}
                    // 下拉加载动画
                    refreshControl={
                        <RefreshControl
                            // ios android 共有的
                            refreshing={this.state.isLoading}   // 是否在刷新时显示指示器
                            onRefresh={this._onRefresh.bind(this)}  // 进行刷新时执行的方法

                            // android
                            colors={['#ff0000', '#00ff00', '#0000ff']}  // 指定加载动画颜色
                            enabled={true} // 是否开启刷新动画
                            progressBackgroundColor={'#00ff00'} // 动画背景颜色
                            progressViewOffset={100}  // 设置设置图标的位置
                            // ios
                            tintColor="#00ff00"  // 图标颜色
                            title="Loading..." // 显示加载文字
                            titleColor="#ff0000" // 文字内容
                        />
                    }
                >
                </ListView>
            </View>
        )
    }
}

let viewListStyles = new StyleSheet.create({
    container: {
        marginTop: 22,
        height: 400,
        backgroundColor: 'black'
    },
    listStyle: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        justifyContent: 'center',
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "blue",
        width: cellWH,
        height: cellWH,
        alignItems: 'center'
    },
});