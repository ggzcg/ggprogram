import {
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet,
    Navigator,
} from 'react-native';
import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import HelloWorld from '../App';
import PickerTest from '../src/js/PickerEvent';
import Touchables from '../src/js/alert';
import Usercenter from '../src/Usercenter';
import SortType from '../src/js/SortType'

export default class Navigators extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: '分类'
    }
  }
  // picker弹窗
  PickerCom() {
    let data = [];
    for(var i=0;i<100;i++){
        data.push(i);
    }

    Picker.init({
        pickerData: data,
        selectedValue: [59],
        onPickerConfirm: data => {
            Alert.alert('data')
        },
        onPickerCancel: data => {
            console.log(data);
        },
        onPickerSelect: data => {
            console.log(data);
        }
    });
    Picker.show();
  }
  _renderTabarItems(selectedTab,icon,selectedIcon,Component){
    return (
      <TabNavigator.Item
          selected={this.state.selectedTab === selectedTab}
          title={selectedTab}
          titleStyle={styles.tabText}
          selectedTitleStyle={styles.selectedTabText}
          renderIcon={() => <Image style={styles.icon} source={icon} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
          onPress={() => this.setState({ selectedTab: selectedTab })}
      >
          <Component />
      </TabNavigator.Item>
    )

  }
  render() {
    return(
      <View style = {styles.container}>
        <TabNavigator>
          {this._renderTabarItems('首页',require('../src/img/f_logo05.png'),require('../src/img/f_logo01.png'),HelloWorld)}
          {this._renderTabarItems('分类',require('../src/img/f_logo06.png'),require('../src/img/f_logo02.png'),SortType)}
          {this._renderTabarItems('购物车',require('../src/img/f_logo07.png'),require('../src/img/f_logo03.png'),PickerTest)}
          {this._renderTabarItems('个人',require('../src/img/f_logo08.png'),require('../src/img/f_logo04.png'),Usercenter)}
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  tabText:{
    color:'#000000',
    fontSize:10
  },
  selectedTabText:{
    color:'#D81E06'
  },
  icon:{
    width:20,
    height:20
  }
})
