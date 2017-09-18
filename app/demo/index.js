import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TextInput
} from 'react-native';

class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);

        let movies = [
            {title: '这个杀手不太冷'},
            {title: '肖生克的救赎'},
            {title: '阿甘正传'},
            {title: '霸王别姬'},
            {title: '美丽人生'}
        ];


        // 列表组件中判断数据是否有变化，如果数据有变化，就触发更新
        let listDataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            movies: listDataSource.cloneWithRows(movies)
        };


    }

    // 列表中渲染每项的renderRow的方法
    renderMovieList(item) {
        return (
            <View style={viewListStyles.item}>
                <View>
                    <Image
                        style={{width: 30, height: 30}}
                        source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505499791547&di=281ddba7eafa241a55da636bcaee6b5c&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FeRv-A9o1L8v4MKZbiobhow%3D%3D%2F6608664116770962144.jpg"}}
                    />
                </View>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </View>
        )

    }

    render() {
        return (
            <View style={demoStyles.container}>
                <Text>文本组件</Text>
                <View style={demoStyles.welcomeStyles}>
                    <Text style={demoStyles.welcomeTitle}>
                        文字样式
                    </Text>
                    <Text>
                        Welcome to 超哥哥的菜场132465!!
                    </Text>
                    <Text>
                        To get started, edit index.ios.js
                    </Text>
                    <Text>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                </View>
                <Text>flexbox布局</Text>
                <View style={flexbox.container}>
                    <View style={[flexbox.item, flexbox.item1]}>
                        <Text style={flexbox.itemText}>1</Text>
                    </View>
                    <View style={[flexbox.item, flexbox.item2]}>
                        <Text style={flexbox.itemText}>2</Text>
                    </View>
                    <View style={[flexbox.item, flexbox.item3]}>
                        <Text style={flexbox.itemText}>3</Text>
                    </View>
                </View>
                <Text>图像组件132</Text>
                <View>
                    <Image
                        style={imageContainer.image}
                        source={{uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505499791547&di=281ddba7eafa241a55da636bcaee6b5c&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FeRv-A9o1L8v4MKZbiobhow%3D%3D%2F6608664116770962144.jpg"}}
                    />
                </View>
                <Text>双image作为背景图像</Text>
                <View>
                    <Image
                        style={imageContainer.backgroundImage}
                        source={{uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505499791547&di=281ddba7eafa241a55da636bcaee6b5c&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FeRv-A9o1L8v4MKZbiobhow%3D%3D%2F6608664116770962144.jpg"}}
                    >
                        <View style={imageContainer.overlay}>
                            <Text style={imageContainer.overlayHeader}>
                                春天的昆虫
                            </Text>
                            <Text style={imageContainer.overlaySubHeader}>
                                2017.09.15
                            </Text>
                        </View>
                    </Image>
                </View>
                <Text>ListView组件生成列表</Text>
                <View>
                    <ListView
                        dataSource={this.state.movies}
                        // 渲染列表项
                        renderRow={this.renderMovieList}
                    />
                </View>
                <Text>TextInput</Text>
                <View>
                    <TextInput>
                        123456
                    </TextInput>
                </View>
            </View>
        )
    }
}

let demoStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        borderWidth: 1,
        borderColor: '#6435c9',
        borderRadius: 16,
        shadowColor: '#6435c9',
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 6,
            width: 6
        }
    },
    welcomeStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        margin: 15,
    },
    welcomeTitle: {
        fontSize: 26,
        color: '#6435c9',
        textAlign: 'center',
        fontStyle: 'italic',
        letterSpacing: 2,
        lineHeight: 33,
        fontFamily: 'Courier',
        fontWeight: '500',
        textDecorationLine: 'underline',
        textDecorationStyle: 'dashed'
    },
});

let flexbox = StyleSheet.create({
    container: {
        flex: 2,
        // react-native 的flex 和web 的主轴方向视觉上默认相反 默认column
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // justifyContent: 'space-between',
        // justifyContent: 'center',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignItems: 'flex-end',
        // alignItems: 'center',
        margin: 10,
        padding: 23,
        backgroundColor: '#dddddd'
    },
    item: {
        // 设置子节点的flex：num 可以控制占父节点的比例
        flex: 1,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#6435c9',
        margin: 6
    },
    item1: {
        // alignSelf: 'flex-start'
    },
    item2: {
        // alignSelf: 'center'
    },
    item3: {
        flex: 2,
    },
    itemText: {
        fontSize: 33,
        fontFamily: 'Helvetica Neue',
        fontWeight: '200',
        color: '#6435c9',
        padding: 5,
    }
});

let imageContainer = {
    image: {
        width: 99,
        height: 138,
        margin: 6,
        // resizeMode: 'contain',
        resizeMode: 'stretch'
    },
    backgroundImage: {
        width: 200,
        height: 100,
        // resizeMode: 'contain',
        // resizeMode: 'stretch',
        resizeMode: 'cover'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignItems: 'center',
    },
    overlayHeader: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        color: '#dddddd',
        padding: 10,
    },
    overlaySubHeader: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        color: '#dddddd',
        padding: 10,
        paddingTop: 0
    }
};

let viewListStyles = {
    item: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(100, 50, 99, 0.6)',
        marginBottom: 6,
        paddingBottom: 6,
    }
};

export {Demo as default}