import {
    View,
    Text,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const NavBarH_android = 50;
const NavBarH_ios = 44;
const StatusBarH = 20;
const StatusBarShape = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool
}

export default class NavigationBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    statusBar: PropTypes.shape(StatusBarShape)
  }
  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      hidden: false,
      navHidden: this.props.navHidden?this.props.navHidden:true,
    }
  }

  render() {
    let status =
    <View style = {[styles.statusBar, this.props.statusBar]}>
      <StatusBar {...this.props.statusBar}/>
    </View>
    let titleView = this.props.titleView ? this.props.titleView :
    <Text style = {styles.title}>{this.props.title}</Text>
    let content =
    this.state.navHidden ?
    <View style = {styles.navBar}>
      {this.props.leftButton}
      <View style = {styles.titleViewCon}>
        {titleView}
      </View>
    </View>
    :
    <Text></Text>

    return (
      <View style = {[styles.container]}>
        {status}
        {content}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'gray',
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? NavBarH_ios : NavBarH_android,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  titleViewCon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  statusBar: {
    backgroundColor: 'red',
    height: Platform.OS === 'ios'? StatusBarH : 0
  }
})
