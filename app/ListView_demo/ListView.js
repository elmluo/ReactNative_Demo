import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView
} from 'react-native';

export default class ViewList extends React.Component {
    constructor(props) {
        super(props);

        let movies = [
            {title: '这个杀手不太冷'},
            {title: '肖生克的救赎'},
            {title: '阿甘正传'},
            {title: '霸王别姬00'},
            {title: '霸王别姬01'},
            {title: '霸王别姬02'},
            {title: '霸王别姬03'},
            {title: '霸王别姬04'},
            {title: '霸王别姬05'},
            {title: '霸王别姬06'},
            {title: '霸王别姬07'},
            {title: '霸王别姬08'},
            {title: '霸王别姬09'},
            {title: '霸王别姬10'},
            {title: '美丽人生'}
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

    renderList(item) {
        return (
            <View style={viewListStyles.item}>
                <View>
                </View>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </View>
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
                >
                </ListView>
            </View>
        )
    }
}

let viewListStyles = new StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        height: 300
    },
    item: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "blue",
        height: 50
    },
    itemTitle: {},
    itemContent: {}
});