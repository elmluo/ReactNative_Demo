import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView
} from 'react-native';

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var TEXT_INPUT_REF = 'urlInput';
let WEBVIEW_REF='webview';
let DEFAULT_URL = "https://www.baidu.com";



export default class NewsDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            uri: DEFAULT_URL,
        }
    }

    render() {
        return(
            <View style={styles.container}>
                {/*可以获取，由上个路由passProps传递过来的数据。*/}
                <View>
                    <Text>{this.props.rowData.name}</Text>
                </View>
                {/*展示网页*/}
                <WebView
                    style={styles.webView}
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={true}
                    // source={{html: "我是网页", baseUrl: ''}}
                    source={{uri: this.state.uri}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            </View>
        )
    }

    componentDidMount() {
    }



    getNewDetail() {
        fetch()
            .then((response)=>response.json())
            .then((jsonData)=>{
                console.log(jsonData)
            })
            .catch((error)=>{
                console.log(error);
                alert("请求数据失败");
            })
    }
}

let styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    webView: {
        backgroundColor: BGWASH,
        height: 350,
    },
});