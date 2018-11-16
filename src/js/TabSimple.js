/*
* 简单的图片tab切换自定义组件
*/

import {
    Text,
    View,
    Platform,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import React, {Component} from 'react';
import {scaleSize} from '../../utils/AdapterUtil'


const imgUrlArr = [
  {url: 'https://timg.quan5.com/goods/103/11689/wb_300X200.jpg', link: false},
  {url: 'https://timg.quan5.com/goods/122/14110/wb_300X200.jpg', link: false},
  {url: 'https://timg.quan5.com/goods/25/1387/wb_300X200.jpg', link: false},
  {url: 'https://timg.quan5.com/goods/156/28960/wb_300X200.jpg', link: false}
]
const imgTextArr = [
  '美式风格',
  '中国风格',
  '现代风格',
  '北欧风格',
  '北欧风格',
  '北欧风格',
]

export default class TabSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrlIndex: imgUrlArr[0].url,
      _index: 0,
    }
  }
  onchange() {
    let imgUrl;
    switch (this.state._index) {
      case 0:
        imgUrl = require("../img/carousel_1.jpg")
        break;
      case 1:
        imgUrl = require("../img/carousel_2.jpg")
        break;
      case 2:
        imgUrl = require("../img/carousel_3.jpg")
        break;
      case 3:
        imgUrl = require("../img/carousel_4.jpg")
        break;
      case 4:
        imgUrl = require("../img/carousel_3.jpg")
        break;
      case 5:
        imgUrl = require("../img/carousel_2.jpg")
        break;
      default:
    }
    return imgUrl
  }
  isScrollStart() {
    this.props.isScrollEndble(false)
  }
  isScrollEnd() {
    this.props.isScrollEndble(true)
  }
  render() {
    const contentTab = imgTextArr.map((item,index)=> {
      return (
        <TouchableOpacity
          key={`${index}_${item}`}
          onPress = {()=>{
            this.setState({
              _index: index
            })
          }}
          onPressIn={this.isScrollStart.bind(this)}
          onPressOut={this.isScrollEnd.bind(this)}
          >
          <Text style = {[styles.contentest, this.state._index == index?styles.contentestIndex:'']}>
            {item}
          </Text>
        </TouchableOpacity>
      )
    })
    return(
      <View style = {styles.mianCon}>
        <View style = {styles.textCon}>
          <Text style = {styles.textTitle}>{this.props.textTitle}</Text>
          <Text style = {styles.textMore}>MORE</Text>
        </View>
        <View style = {styles.container}>
          <ScrollView style = {{flex: 1, height: scaleSize(180)}}>
            <View
              style = {styles.contentTab}
            >
              {contentTab}
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity>
              <Image style = {styles.imgCon} source = {this.onchange()} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mianCon: {
    width: scaleSize(355),
    height: scaleSize(280),
    padding: scaleSize(10),
    marginTop: scaleSize(10),
    backgroundColor: 'white',
  },
  container: {
    height: scaleSize(200),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentTab: {
    width: scaleSize(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleSize(10)
  },
  imgCon: {
    width: scaleSize(235),
    height: scaleSize(150),
  },
  contentest: {
    width: scaleSize(90),
    fontSize: scaleSize(18),
    borderColor: '#ff6f00',
    color: '#777',
    paddingVertical: scaleSize(5),
    textAlign: 'center',
    marginBottom: scaleSize(10),
  },
  contentestIndex: {
    width: scaleSize(80),
    color: '#ff6f00',
  },
  textTitle: {
    color: '#333',
    height: scaleSize(30),
    fontSize: scaleSize(22),
    lineHeight: scaleSize(30)
  },
  textMore: {
    width: scaleSize(60),
    height: scaleSize(30),
    lineHeight: scaleSize(30),
    color: '#999',
    textAlign: 'center',
    fontSize: scaleSize(14),
    borderWidth: scaleSize(1),
    borderColor: '#999',
    borderRadius: scaleSize(20)
  },
  textCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleSize(15)
  }
})
