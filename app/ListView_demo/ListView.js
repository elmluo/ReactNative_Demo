import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Alert,
    TouchableOpacity,
} from 'react-native';

export default class ViewList extends React.Component {
    constructor(props) {
        super(props);

        let movies = [
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
            movies: ds.cloneWithRows(movies),
        };

    }

    renderList(rowData, sectionID, rowID, hightlightRow) {
        console.log(rowData, sectionID, rowID);
        return (
            <TouchableOpacity activeOpacity={0.5}
                                onPress={()=>{Alert.alert('点击了第'+ rowID +'行')}}>
                <View style={viewListStyles.item}>
                    <View style={viewListStyles.itemImg}>
                    </View>
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

    render() {
        return (
            <View style={viewListStyles.container}>
                <ListView
                    // 数据
                    dataSource={this.state.movies}
                    // 首页加载的数量
                    initailListSize
                    // 渲染列表
                    renderRow={this.renderList}
                    showsVerticalScrollIndicator={false}
                >
                </ListView>
            </View>
        )
    }
}

let viewListStyles = new StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
        height: 300
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "blue",
        height: 50
    },
    itemImg:{
        width: 50,
        backgroundColor: 'red',
    },
    itemContent: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'pink'
    }
});