
import {
    View,
    Text,
    Platform,
    StyleSheet,
    Navigator,
} from 'react-native';
import React, {Component} from 'react';

export default class Other extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style= {styles.text}>我是陌生人</Text>
        <Text style= {styles.text}>我借到了男孩的:{this.props.word}</Text>
        <Text style = {styles.text}
          onPress = {() => {
            this.props.onCallBack('1001元')
            this.props.navigator.pop()
          }}
        >还给男孩儿1001元</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})
