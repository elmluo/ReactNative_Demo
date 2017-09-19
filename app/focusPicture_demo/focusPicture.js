import React from 'react';
// 引入计时器类库
var TimerMixin = require('react-timer-mixin');
import {
    StyleSheet,
    View,
    Text,
    Alert,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');

// ES5创建类的写法
export default React.createClass({
    // 注册计时器
    mixins: [TimerMixin],

    getDefaultProps() {
        return {
            data: [
                {
                    "img": "img_01",
                    "title": "微微一笑很倾城01",
                },
                {
                    "img": "img_02",
                    "title": "微微一笑很倾城02",
                },
                {
                    "img": "img_03",
                    "title": "微微一笑很倾城03",
                },
                {
                    "img": "img_04",
                    "title": "微微一笑很倾城04",
                },
                {
                    "img": "img_05",
                    "title": "微微一笑很倾城05",
                },
            ],
            // 每隔多少时间
            duration: 1000,
        }
    },

    // 设置可变的初始值
    getInitialState() {
       return {
           // 当前页码
           currentPage: 0,
       }
    },

    // 实现一些复杂操作，数据请求等
    componentDidMount() {
       // 开启一个定时器
       this.startTimer();
    },

    // 开启定时器
    startTimer() {
        // 1.拿到scrollView组件
        let scrollView = this.refs.scrollView;
        let imgCount = this.props.data.length;
        // 2.添加定时器
        this.timer = this.setInterval(function(){
            // console.log(123)
            // 2.1 设置圆点
            let activePage = 0;
            // 2.2 判断
            if ((this.state.currentPage + 1) >= imgCount ) {
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }
            // 2.3 更新状态机；
            this.setState({
                currentPage: activePage
            });
            // 2.4 让scrollView滚动起来
            let offsetX = activePage * width;
            scrollView.scrollTo({
                x: offsetX,
                y: 0,
                animated: true
            })
        }, this.props.duration)
    },

    render() {
        return (
            <View style={focusPictureStyles.container}>
                <ScrollView
                    ref='scrollView'
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}  // 水平滚动条控制
                    pagingEnabled={true}
                    // 当一帧滚动结束
                    onMomentumScrollEnd = {(e)=>this.onScrollAnimationEnd(e)}
                    // 开始拖拽的时候
                    onSrollBeginDrag = {this.onScrollBeginDrag}
                    // 停止拖拽
                    onScrollEndDrag = {this.onScrollAnimationEnd}
                >
                    {/*{this.renderAllImage()}*/}
                    <Image source={require('./img/img_01.png')} style={{width: width, height: 200}}/>
                    <Image source={require('./img/img_02.png')} style={{width: width, height: 200}}/>
                    <Image source={require('./img/img_03.png')} style={{width: width, height: 200}}/>
                    <Image source={require('./img/img_04.png')} style={{width: width, height: 200}}/>
                    <Image source={require('./img/img_05.png')} style={{width: width, height: 200}}/>

                </ScrollView>
                <View style={focusPictureStyles.pageViewStyle}>
                    {/*返回5个园点   */}
                    {this.renderPageCircle()}
                </View>
            </View>

        )
    },

    renderAllImage() {
        // 图片组件数组
        let allImage = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let item = this.props.data[i];
            // 创建组建装入数组
            allImage.push(
                <Image key={i}
                    // source={{uri: item.img}}       //需要放在原生资源文件夹下面
                       source={require('./img/img_01.png')}
                       style={{width: width, height: 200}}
                />
            )
        }
        return allImage;
    },

    renderPageCircle() {
        let indicatorArr = [];
        let curStyle;
        for (let i = 0; i < this.props.data.length; i++) {
            // 判断 默认显示的样式
            curStyle = (i == this.state.currentPage)
                        ? {color: 'orange'}
                        : {color: '#ffffff'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, curStyle]}>&bull;</Text>
            )
        }
        return indicatorArr;
    },

    /**
     * 一帧(一个image)滚动结束的时候调用
     * @param e 当前事件操作对象
     */
    onScrollAnimationEnd(e) {
        // Alert.alert("动了一帧");
        // 1.求出水平方向的偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        // 2.求出当前的页数,
        let currentPage = Math.round(offsetX / width);
        console.log(currentPage);
        // 3.更新状态机，重新render组建
        this.setState({
            currentPage: currentPage
        })
    },

    // 调用开拖拽
    onScrollBeginDrag() {
       // 停止定时器
        this.clearInterval(this.timer)
    },
    // 调用停止拖拽
    onScrollEndDrag() {
        // 开启一个定时器
        this.startTimer();
    }

})

let focusPictureStyles = new StyleSheet.create({
    container: {
        marginTop: 25,
    },
    pageViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        height: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        bottom: 0,
    }

});
