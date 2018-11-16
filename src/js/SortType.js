/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LeftFlatList from './leftFlatList'
import RightSectionList from './RightSectionList'
import linkageData from './linkage.json'
import TopMenu from './TopMenu2'
import {scaleSize, scaleHeight} from '../../utils/AdapterUtil';

export default class SortType extends Component {
    render() {
        return (
            <View style = {styles.container}>
               <View style = {styles.TopMenuCon}>
                <Text style = {styles.leftListTitle}>商品名称</Text>
                <TopMenu/>
               </View>
               <View  style={styles.ListView}>
                 <RightSectionList style = {styles.RightSectionList} data = {linkageData}/>
                 <View style = {styles.mianCon}>

                 </View>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
    TopMenuCon: {
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      width: '100%',
      height: scaleSize(80),
    },
    ListView: {
      flexDirection: 'row',
      marginTop: scaleSize(80),
    },
    RightSectionList: {
      width: scaleSize(200),
    },
    leftListTitle: {
      width: scaleSize(200),
      height: scaleSize(80),
      textAlign: 'center',
      lineHeight: scaleHeight(80),
      fontSize: scaleSize(20),
      backgroundColor: 'white',
      borderRightWidth: scaleSize(1),
      borderColor: '#999'
    },
    mianCon: {
      width: scaleSize(510),
      height: scaleSize(500),
      marginTop: scaleSize(20),
      backgroundColor: '#fff',
    }
});
