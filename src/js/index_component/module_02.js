import {
    Text,
    View,
    Platform,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import React, {Component} from 'react';
import {scaleSize} from '../../../utils/AdapterUtil'
import {Carousel}from 'antd-mobile-rn';

const CarouselInfo = [
  {
    imgInfo_01:{
      uri: 'https://img.gongxiangjia.com/other/2018/0525/090407830.jpg',
      imgInnerText: '美式 | 14件套',
      textConName: '雪茄记忆',
      textConprize: '￥42221',
    },
    imgInfo_02:{
      uri: 'https://img.gongxiangjia.com/other/2018/0525/09451278.jpg',
      imgInnerText: '美式 | 14件套',
      textConName: '罗马假日',
      textConprize: '￥42221',
    }
  },
  {
    imgInfo_01:{
      uri: 'https://img.gongxiangjia.com/other/2018/0525/090407830.jpg',
      imgInnerText: '美式 | 14件套',
      textConName: '雪茄记忆',
      textConprize: '￥42221',
    },
    imgInfo_02:{
      uri: 'https://img.gongxiangjia.com/other/2018/0525/09451278.jpg',
      imgInnerText: '美式 | 14件套',
      textConName: '罗马假日',
      textConprize: '￥42221',
    }
  },
]
export default class Module02 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const carouselCon = CarouselInfo.map((item, index)=> {
      return(
        <View key = {`${index}_${item}`} style={[styles.containerHorizontal]}>
          <View>
            <ImageBackground resizeMode = 'contain' source={{uri: item.imgInfo_01.uri}} style={styles.carouselImg}>
              <Text style = {styles.imgInnerText}>{item.imgInfo_01.imgInnerText}</Text>
            </ImageBackground>
            <View style = {styles.textCon}>
              <Text>{item.imgInfo_01.textConName}</Text>
              <Text>{item.imgInfo_01.textConprize}</Text>
            </View>
          </View>
          <View>
            <ImageBackground resizeMode = 'contain' source={{uri: item.imgInfo_02.uri}} style={styles.carouselImg}>
              <Text style = {styles.imgInnerText}>{item.imgInfo_02.imgInnerText}</Text>
            </ImageBackground>
            <View style = {styles.textCon}>
              <Text>{item.imgInfo_02.textConName}</Text>
              <Text>{item.imgInfo_02.textConprize}</Text>
            </View>
          </View>
        </View>
      )
    })
    return(
      <View style = {styles.container}>
        <View style = {styles.textCon}>
          <Text style = {styles.textTitle}>整装方案</Text>
          <Text style = {styles.textMore}>MORE</Text>
        </View>
        <View style={{ paddingHorizontal: scaleSize(0) }}>
          <Carousel
            style={styles.wrapper}
            selectedIndex={0}
            autoplay
            dots = {false}
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            {carouselCon}
          </Carousel>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: scaleSize(290),
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: scaleSize(290),
  },
  carouselImg: {
    position: 'relative',
    width: scaleSize(335),
    height: scaleSize(250),
  },
  container: {
    flex: 1,
    height: scaleSize(350),
    padding: scaleSize(10),
    marginTop: scaleSize(10),
    backgroundColor: 'white',
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
    marginBottom: scaleSize(15),
    fontSize: scaleSize(18),
    height: scaleSize(30),
    lineHeight: scaleSize(30)
  },
  imgInnerText: {
    position: 'absolute',
    bottom: scaleSize(18),
    left: scaleSize(18),
    color: '#fff',
    fontSize: scaleSize(15),
  }
})
