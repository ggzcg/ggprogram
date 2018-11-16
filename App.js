/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Picker from 'react-native-picker';
import {
  StatusBar,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Animated,
  RefreshControl
  } from 'react-native';

import Header from './src/js/header';
import BasicCarousel from './src/js/carousel';

import NavigationBar from './common/NavigationBar';
import {scaleSize, scaleHeight} from './utils/AdapterUtil';
import TabSimple from './src/js/TabSimple';
import Module01 from './src/js/index_component/module_01';
import Module02 from './src/js/index_component/module_02';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 淡入动画
type Props = {};
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
  }
  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
      this.state.fadeAnim,            // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 5000,              // 让动画持续一段时间
      }
    ).start();                        // 开始执行动画
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class HelloWorld extends Component<Props> {
  constructor() {
		super();
		this.state = {
			text: '',
      refreshing: false,
      isScroll: true,
		};
	};
  // 子传父控制滚动
  isScrollEndble(isScroll) {
    this.setState({
        isScroll: isScroll
    })
  }
  render() {
    const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			autoplay: true,
      vertical: true,
      autoplayInterval: 3000
		};
    const style01 = {
      textType: 1,
      imgType: 1,
    }
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }


    return (
      <View style = {[styles.container]}>
      <StatusBar backgroundColor="white" barStyle="light-content"/>
      <ScrollView
        scrollEnabled = {this.state.isScroll}
      >
        <Header/>
        <View style = {styles.wrapCon}>
          <Module01 {...style01}/>
          <Module01 {...style01}/>
          <TabSimple textTitle = '客厅方案'  isScrollEndble = {this.isScrollEndble.bind(this)}/>
          <TabSimple textTitle = '卧室方案'  isScrollEndble = {this.isScrollEndble.bind(this)}/>
        </View>
        <Module02/>
        <Module02/>
        <BasicCarousel/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: null,
    width: null,
    flex: 1,
    padding: scaleSize(15),
    backgroundColor: '#f1f1f1',
  },
  wrapCon: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
