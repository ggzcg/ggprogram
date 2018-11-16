
import {
    View,
    Text,
    Platform,
    StyleSheet,
    Image,
    Navigator,
    TouchableOpacity
} from 'react-native';
import React, {Component} from 'react';
import Other from './Other';
import NavigationBar from '../../common/NavigationBar'

export default class Boy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      word: ""
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
          title = {'boy'}
          statusBar = {{
            backgroundColor: 'red'
          }}
          leftButton = {
            <TouchableOpacity>
                <Image source = {require('../img/item_arrow.png')} />
            </TouchableOpacity>
          }
        />
        <View>
          <Text style= {styles.text}>我是男孩儿</Text>
          <Text style = {styles.text}
            onPress = {() => {
              this.props.navigator.push({
                component: Other,
                params: {
                  word: '1000元',
                  onCallBack: (word)=>{
                    this.setState({word: word})
                  }
                }
              })
            }}
          >借陌生人1000元</Text>
          <Text style= {styles.text}>我收到了陌生人的{this.state.word}</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'#f1f1f1'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})
