
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import Boy from './js/Boy';

export default class Usercenter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Navigator
          initialRoute = {{ component: Boy }}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component navigator = {navigator} {...route.params}/>
          }}
        ></Navigator>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})
