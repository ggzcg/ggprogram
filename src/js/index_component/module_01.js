import {
    Text,
    View,
    Platform,
    Image,
    StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import {scaleSize, scaleHeight} from '../../../utils/AdapterUtil'

export default class Module01 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textType: this.props.textType,
      imgType: this.props.imgType
    }
  }

  render() {
    let TextCon =
      this.state.textType == 1?
      <View>
        <Text style = {styles.testCon}>共享家总代理演示</Text>
        <Text style = {styles.testCon}>地址:广东深圳南山区威盛科技大厦</Text>
      </View>
      :
      <View>
        <Text style = {styles.testCon2}>{this.Props.productName}</Text>
        <Text style = {styles.testCon2}>{this.Props.productPrize}</Text>
      </View>


    let ImageCon =
      this.state.imgType == 1?
      <View>
        <Image resizeMode = 'contain' style = {styles.imgCon} source = {require('../../img/21.jpg')} />
      </View>
      :
      <View>
        <Image resizeMode = 'contain' style = {styles.imgCon} source = {require('../../img/21.jpg')} />
      </View>


    return(
      <View style = {styles.container}>
        <Text style = {styles.title}>装企信息</Text>
        {ImageCon}
        {TextCon}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: scaleSize(355),
    height: scaleSize(310),
    padding: scaleSize(10),
    marginTop: scaleSize(10),
    backgroundColor: 'white',
  },
  imgCon: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: scaleSize(335),
    height: scaleSize(200),
  },
  title: {
    width: scaleSize(335),
    fontSize: scaleSize(20),
    textAlign: 'left'
  },
  testCon: {
    width: scaleSize(335),
    fontSize: scaleSize(20),
    height: scaleSize(30),
    lineHeight: scaleSize(30),
  },
  testCon2: {
    flex: 1,
    fontSize: scaleSize(17),
    height: scaleSize(30),
    lineHeight: scaleSize(30),
    justifyContent: 'space-between'
  }
})
