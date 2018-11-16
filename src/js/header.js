import {
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';
import React, {Component} from 'react';


//export 因为要在其他类中使用
export default class Header extends React.Component{
    render(){
        return (
           <View style={styles.container}>

            <Image source={require('../img/logo.png')} style={styles.logo}/>

            <View style={styles.searchBox}>

                 <Image source={require('../img/search_icon.png')} style={styles.searchIcon}/>

                 <TextInput style={styles.inputText}
                            keyboardType='web-search'
                            placeholder='搜索全屋优品商品/店铺' />

            </View>

            <Image source={require('../img/user08.png')} style={styles.scanIcon}/>

           </View>
        )
    }
}

//样式
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: 'white',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {//图片logo
        height: 24,
        width: 100,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox:{//搜索框
      height:40,
      flex: 1,
      flexDirection: 'row',   // 水平排布
      borderRadius: 5,  // 设置圆角边
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      marginLeft: 8,
      marginRight: 8,
    },
    searchIcon: {//搜索图标
        height: 20,
        width: 20,
        marginLeft: 5,
        resizeMode: 'stretch'
    },
    inputText:{
      flex:1,
      backgroundColor:'transparent',
      fontSize:15,
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    scanIcon: {//搜索图标
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
});
