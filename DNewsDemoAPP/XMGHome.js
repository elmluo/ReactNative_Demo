import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import NewDetail from './XMGHome_newsDetail'

let {width, height} = new Dimensions.get('window');

class Home extends React.Component {

    /**
     * lefeHook: 数据准备
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            headerData: {},
            // 这里很重要
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    /**
     * lifeHook： 渲染DOM元素
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    // 在调用这样的渲染组建，特别是里面有嵌套，特别是有嵌套方法的时候最好bind this这个上下文。
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={this.renderHeader.bind(this)}
                    showsVerticalScrollIndicator={false}>
                </ListView>
            </View>
        )
    }

    /**
     * 点击跳转到详情页
     * @param rowData  点击内容的数据
     */
    pushToNewsDetail(rowData) {
        console.log(rowData);
        // 将组建push到父组建传入的导航。
        this.props.navigator.push({
            component: NewDetail,
            title: rowData.name,
            passProps: {rowData}
        })
    }

    /**
     * 渲染列表row
     * @returns {XML}
     */
    renderRow(rowData, sectionID, rowID, hightlightRow) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    this.pushToNewsDetail(rowData)
                }}
            >
                <View style={styles.row}>


                    <Image
                        style={{width: 80, height: 50}}
                        // 后台必须支持https资源的网络请求
                        source={{uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505998599977&di=64227afaba59e294538feec15c69a445&imgtype=0&src=http%3A%2F%2Fd.5857.com%2Ffjgqsj_151202%2F002.jpg"}}
                    />
                    <View style={styles.rowRight}>
                        <Text style={styles.rowRightTitle}>
                            {rowData.name}
                        </Text>
                        <Text style={styles.rowRightText}>
                            {rowData.description}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>

        )
    }

    /**
     * 渲染列表header
     * @returns {XML}
     */
    renderHeader() {
        return (
            <View style={styles.header}>
                <Text>列表头部</Text>
            </View>
        )
    }

    /**
     * 请求网络数据
     */
    loadDataFromNet() {
        // ios 请求协议要用https
        fetch('https://www.imooc.com/api/teacher?type=4&num=30')
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData.data);
                this.setState({
                    // 同步请求数据，更新数据源
                    headerData: jsonData.headerData,
                    dataSource: this.state.dataSource.cloneWithRows(jsonData.data)
                });
            })
            .catch((error) => {
                console.log(error);
                // 如果网络不好，使用本地数据
                if (error) {
                }
            })
    }

    /**
     * lifeHook 复杂操作和数据获取在这个生命周期里面执行
     */
    componentDidMount() {
        this.loadDataFromNet();
        console.log(this.props);
    }

}

let styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.1
    },
    row: {
        flexDirection: 'row',
        width: width,
        borderBottomWidth: 1,
        borderColor: "#dddddd"
    },
    rowLeft: {},
    rowLeftImg: {
        width: 50,
        height: 50,
    },
    rowRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowRightTitle: {
        color: 'blue'
    },
    rowRightText: {
        marginTop: 6,
        color: 'pink',
        fontSize: 10
    }

});

export default Home;