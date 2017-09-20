/**
 * Created by gaotianyi on 17/7/24.
 */


import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ListView,
    NativeModules,
    AsyncStorage,
} from 'react-native';

const {UserDefaults} = NativeModules;

import RecommendView from '../Components/HomePage/RecommendView';
import  Dimensions from 'Dimensions';
import URL from '../NetWork/NetWorkApplication';
import Login from '../Components/LoginAndRegister/Login';
import {Navigator} from 'react-native-deprecated-custom-components';


import Swiper from 'react-native-swiper';


var width = Dimensions.get('window').width;
var brandWidth = 95;
var brandHeight = 110;
var size = width / 320;


import  ViewPager from 'react-native-viewpager';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this._renderPage = this._renderPage.bind(this);
        this._hotViewOnClick = this._hotViewOnClick.bind(this);
        this._goodClick = this._goodClick.bind(this);
        this.state = {
            dataSource: [],
            headerData: new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2,
            }),
            hotNews: [],
            titleArr: [],
            brandArr: [],
            selectedStores: [],
            recommendData: []
        };

    }


    render() {
        console.log('render');
        UserDefaults.getObject("aaa", data => {
            console.log(data);
        });
        if (this.state.hotNews.length === 0) {
            return (<View></View>)
        } else {
            return (
                <View style={styles.container}>
                    {/*导航条*/}

                    {this.renderNavBar()}
                    {/*头部轮播图*/}
                    <ScrollView style={{width: width, flex: 1, backgroundColor: 'rgba(239,239,239,1.0)'}}>
                        {this.renderHeaderView()}
                        {this.renderSecondView()}
                        {this.renderHotNewView()}
                        {this.renderBrandView()}
                        {this.renderGoodShopView()}
                        {this.renderReconmmendView()}
                    </ScrollView>
                </View>
            )
        }

    }

    //导航条
    renderNavBar() {
        return (
            <View style={styles.naviBarStyle}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                }}>
                    <View style={styles.leftViewStyle}>
                        <Text style={{marginTop: 10, color: 'white'}}>杭州</Text>
                        <Image source={{uri: '1233'}} style={{width: 5, height: 5, marginTop: 10}}/>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize: 16, color: 'white', marginTop: 10, marginRight: 10}}>首页</Text>
                <Image source={{uri: 'scan'}} style={styles.navRightImgStyle}/>
            </View>
        )
    }

    //轮播图
    renderHeaderView() {
        return (
            <View style={{width: width, height: width / 2.0, backgroundColor: 'white'}}>
                <ViewPager style={{width: width, height: width / 2.0}}
                           dataSource={this.state.headerData}
                           renderPage={this._renderPage}
                           autoPlay={true}
                           isLoop={true}
                />
            </View>
        )
    }


    //secondView
    renderSecondView() {
        return (
            <View style={styles.secondViewStyle}>{
                this.state.titleArr.map(item => {
                    // console.log(item.id);
                    return (
                        <TouchableOpacity key={item.id} onPress={() =>
                            this._buttonTouch(item.id)}>
                            <View key={item.id} style={styles.innerViewStyle}>
                                <Image source={{uri: item.iconName}}
                                       style={{width: 45, height: 45, marginBottom: 3}}/>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }</View>
        )
    }

    //惠众热点
    renderHotNewView() {
        return (
            <View style={{width: width, height: 50, flexDirection: 'row', backgroundColor: 'white', marginBottom: 12}}>
                <Image source={{uri: '惠众热点'}} style={{width: 30, height: 30, marginTop: 8, marginLeft: 12}}/>
                <Swiper
                    autoplay={true}
                    autoplayTimeout={2}
                    horizontal={false}
                    showsPagination={false}
                    style={styles.wrapper} showsButtons={false}>

                    {this.renderImg()}
                </Swiper>
            </View>
        )
    }

    //热点轮播
    renderImg() {
        return (
            this.state.hotNews.map(item => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this._hotViewOnClick(item)}>
                        <View style={styles.hotViewStyle}>
                            <Text style={styles.text}>{item.newsTitle}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        )
    }

    //精选品牌
    renderBrandView() {
        return (
            <View style={{backgroundColor: 'white', marginBottom: 12,}}>
                <View style={{flexDirection: 'row', marginBottom: 12, marginTop: 12, alignItems: 'center'}}>
                    <Image source={{uri: '形状-4'}} style={{width: 12 * size, height: 12 * size}}/>
                    <Text>精选品牌</Text>
                </View>
                {this.renderBrandItem()}
            </View>
        )
    }

    //精选品牌Item
    renderBrandItem() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12}}>{
                this.state.brandArr.map(item => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this._selectedBrand(item)}>
                            <View>
                                <Image source={{uri: item.image}}
                                       style={{width: brandWidth * size, height: brandHeight * size}}/>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }</View>
        )
    }


    //好店推荐
    renderGoodShopView() {
        return (
            <View style={{backgroundColor: 'white', marginBottom: 12}}>
                <View style={{flexDirection: 'row', height: 30, alignItems: 'center'}}>
                    <Image source={{uri: '形状-4'}} style={{width: 12 * size, height: 12 * size}}/>
                    <Text>好点推荐</Text>
                </View>
                <ScrollView horizontal={true} style={{backgroundColor: "white"}}>{
                    this.state.selectedStores.map(item => {
                        return (
                            <View
                                style={{width: 245, height: 169, backgroundColor: 'rgba(234,234,234,1.0)', margin: 8}}>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={() => this._goodClick(item)}>
                                        <Image source={{uri: 'http://www.hzzx1688.com/res/dealer/dealer_22logo.jpg'}}
                                               style={{width: 36, height: 36, margin: 12}}/>
                                    </TouchableOpacity>
                                    <Text style={{marginTop: 12}}>{item.storeName}</Text>
                                </View>
                                <View style={{flexDirection: "row", marginLeft: 8, justifyContent: 'center'}}>
                                    {this.renderGoodItem(item["selectedMallItems"])}
                                </View>
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }

    //好店推荐的item
    renderGoodItem(items) {
        return (
            items.map(item => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() =>
                        this._selectItem(item)
                    }>
                        <View style={{marginRight: 8, alignItems: "center"}}>
                            <Image source={{uri: item.mallItemImagePath}} style={{width: 70, height: 70}}/>
                            <Text style={{width: 70, fontSize: 12}} numberOfLines={2}>{item.mallItemName}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        )
    }

    //精选商品
    renderReconmmendView() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    height: 50,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: width
                    }}>
                        <Text>精选商品</Text>

                        <View style={{flexDirection: 'row', position: 'absolute', top: 18, right: 12}}>
                            <TouchableOpacity>
                                <Text>查看更多</Text>
                            </TouchableOpacity>
                            <Image source={{uri: '圆角矩形'}} style={{marginTop: 5, width: 5, height: 5}}/>
                        </View>

                    </View>
                </View>
                <RecommendView item={this.state.recommendData}/>
            </View>
        )
    }


    //componentDidMount


    componentDidMount() {

        console.log('componentDidMount');

        var url = URL.HOST + URL.HOME;
        this.loadDataFromNet(url);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // console.log(nextState);
        if (this.state.hotNews.length > 0) {
            console.log("防止刷新");
            return false;
        }
        return true;
    }

    //componentWillUpdate
    componentWillUpdate() {

    }

    //网络访问
    loadDataFromNet(url, callback) {
        // var url =
        console.log('网络访问');
        return fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log(responseData);
                var jsonData = responseData["data"];
                var banners = jsonData["banners"];
                var hotNews = jsonData["hotNews"];
                var hot = [];
                var brand = jsonData["selectedBrands"];
                var selectShop = jsonData["selectedStores"];
                var recommend = jsonData["recommendItems"];
                for (var i = 0; i < hotNews.length; i++) {
                    var data = hotNews[i];

                    hot.push({title: data.newsTitle});
                }

                this.setState({
                    headerData: this.state.headerData.cloneWithPages(banners),
                    hotNews: hotNews,
                    titleArr: [{id: 1, name: "我的分享", iconName: "我的推荐"}, {id: 2, name: "积分商城", iconName: "积分商城"}, {
                        id: 3,
                        name: "车房项目",
                        iconName: "车房"
                    }, {id: 4, name: "惠财富", iconName: "惠财富"}, {id: 5, name: "签到", iconName: "签到"}],

                    brandArr: brand,
                    selectedStores: selectShop,
                    recommendData: recommend
                })
                // TestManager.doSomething(hot);
            })
    }


    //首页导航轮播图

    _renderPage(data, pageID) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.viewPageCheck(pageID)}>
                <Image source={{uri: data.bannerPic}} style={styles.headerImgStyle}/>
            </TouchableOpacity>
        )
    }

    //_buttonTouch
    _buttonTouch(id) {
        // alert(id);
        switch (id) {
            case 1: {
                this._navigate("aa", 'Bottom')
            }
            case 2:

            case 3:

            case 4:

            case 5:

            default:

        }


    }


    _navigate(name, type = 'Normal') {
        // alert(type);
        this.props.navigator.push({
            component: Login,
            type: type

        })
    }

    //轮播图点击事件
    viewPageCheck(pageId) {
        alert(pageId);
    }


    _hotViewOnClick(item) {
        alert(item.newUrl);
    }


    //选中精选品牌
    _selectedBrand(item) {
        alert(item.brandurlId);
    }

    //好店推荐
    _goodClick(item) {
        alert(item.dealerId);

    }

    _selectItem(item) {
        alert(item.mallItemId);
    }


    //查看更多
    _lookMore() {

    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    naviBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        backgroundColor: 'rgb(255,91,61)',
    },

    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    navRightImgStyle: {
        width: 28,
        height: 28,
        marginTop: 10,
        marginRight: 3
    },

    headerImgStyle: {
        width: width,
        height: width / 2.0,
    },

    secondViewStyle: {
        height: 80,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    innerViewStyle: {
        width: 70,
        height: 70,
        alignItems: 'center',
    },

    wrapper: {
        // flexDirection:'row'
    },

    text: {
        color: 'black',
        fontSize: 14,
    },
    hotViewStyle: {
        flexDirection: 'row',
        // justifyContent:'center',
        height: 50,
        alignItems: 'center',
        marginLeft: 8
    },
})


export default HomePage;



