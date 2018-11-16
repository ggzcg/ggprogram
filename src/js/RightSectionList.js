/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Dimensions,
    DeviceEventEmitter,
    ScrollView,
    RefreshControl
} from 'react-native';
// var {width,height} = Dimensions.get('window');
import {scaleSize, scaleHeight} from '../../utils/AdapterUtil';
var sectionData = []
export default class RightSectionList extends Component {
    // 构造
    constructor(props) {
        super(props);
        sectionData = this.props.data.food_spu_tags
        this.state = {
            sectionData:sectionData,
            refreshing: false
        };
        this._onLoad();
    }
    //行
    renderItem = (item) => {
        return (
            <View  key = {item.item.key} style={{overflow: 'hidden', width: scaleSize(200),height:scaleSize(80),justifyContent:'center', paddingLeft:scaleSize(20),backgroundColor: 'white'}}>
                <Text>{item.item.name}</Text>
            </View>
        )
    }
    //头
    sectionComp = (section) => {
        return (
            <View style={{overflow: 'hidden', width: scaleSize(200),height:scaleSize(40),backgroundColor:'#DEDEDE',justifyContent:'center',paddingLeft:scaleSize(20)}}>
                <Text >{section.section.title}</Text>
            </View>
        )
    }

    //头部加载
    _onLoad = ()=> {
      this.setState({refreshing: !this.state.refreshing})
      setTimeout(()=>{
        this.setState({
          refreshing: false
        })
      }, 2000)
    }
    //使用json中的key动态绑定key
    keyExtractor(item, index) {
        return '0'+index
    }

    render() {
        return (
            <SectionList
                ref='sectionList'
                renderSectionHeader={(section)=>this.sectionComp(section)} //头
                renderItem={(item)=>this.renderItem(item)} //行
                ItemSeparatorComponent = {(item)=>{return(<View style={{width: scaleSize(200),height:1,backgroundColor:'#f2f2f2'}}/>)}}//分隔线
                sections={this.state.sectionData} //数据
                onViewableItemsChanged = {(info)=>this.itemChange(info)}  //滑动时调用
                // ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                refreshControl={<RefreshControl
                  refreshing = {this.state.refreshing}
                  onRefresh = {this._onLoad}
                  />}
                keyExtractor={this.keyExtractor}
                style = {{width: scaleSize(200), overflow: 'hidden'}}
            />

        );
    }

    componentDidMount() {
        //收到监听

        this.listener = DeviceEventEmitter.addListener('left',(e)=>{
            // console.log(e + 1) // 左边点击了第几行
            // console.log(sectionData) // 数据源
            // console.log(sectionData[e])
            // console.log(sectionData[e].data.length)
            // SectionList实现scrollToIndex需要修改VirtualizedSectionList和SectionList源码
            if(e > 0){
                //计算出前面有几行
                var count = 0
                for(var i = 0; i < e; i++){
                    count += sectionData[i].data.length + 2
                }
                this.refs.sectionList.scrollToIndex({animated: true, index: count})
            }else {
                this.refs.sectionList.scrollToIndex({animated: true, index: 0})  //如果左边点击第一行,右边则回到第一行
            }


        });
    }

    componentWillUnmount(){
        // 移除监听
        this.listener.remove();
    }

    itemChange = (info)=>{
        let title = info.viewableItems[0].item.title
        var reg = new RegExp("^[0-9]*$");
        if (reg.test(title)) {
            DeviceEventEmitter.emit('right',title); //发监听
        }
    }


}
