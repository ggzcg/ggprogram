
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ListView,
  Modal ,
} from 'react-native';
import {scaleSize, scaleHeight} from '../../utils/AdapterUtil';
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

let CourseItemArr = []
export default class TopMenu extends Component {
  constructor(props){
    super(props);
    this.state=({
      showModal:false,
      course:"风格",
      arrow_down: require('../img/arrow_down.png'),
      arrow_up: require('../img/arrow_up.png'),
    });
  }

  selCourse(course){
    this.setState({
      showModal:false,
      course:course,
    });
  }
  componentWillMount() {

  }
  courseItemFun(CourseItemArr) {
    let _indexNum = 0;
    if(CourseItemArr.length % 5 == 0) {
      return
    } else {
      _indexNum = 5 - CourseItemArr.length % 5
      for(let i = 0; i < _indexNum; i++) {
        let arrnull = {};
        CourseItemArr.push(arrnull)
      }
    }

    const courseItems = CourseItemArr.map((item, index)=>{
      return (
          item == "" ?
          <CourseItem key = {`${index}`} course = ''  onPress = {()=>{this.selCourse('')}}/>
          :
          <CourseItem key = {`${index}_${item}`} course = {item.course}  onPress = {()=>{this.selCourse(item.selCourse)}}/>
      )
    })
    return courseItems
  }
  render() {
    CourseItemArr = [
      {course:'不限', selCourse:'不限'},
      {course:'新古典', selCourse:'新古典'},
      {course:'简约风格', selCourse:'简约风格'},
      {course:'北欧风格', selCourse:'北欧风格'},
      {course:'现代风格', selCourse:'现代风格'},
      {course:'现代风格', selCourse:'现代风格'},
      {course:'现代风格', selCourse:'现代风格'},
    ]
    return (
      <View style={styles.container}>
        <View style={styles.headStyle}>
          <Text style={styles.headText} onPress={()=>{this.setState({showModal:true})}}>
            {this.state.course}
          </Text>
          <TouchableOpacity style={{marginLeft:10}}
            onPress={()=>{this.setState({showModal:true})}}
            hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
            <Image style={styles.arrStyle} resizeMode = 'contain' source={this.state.arrow_down}/>
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.showModal}
          transparent={true}
          animationType='fade'
          onRequestClose={() => {}}
          style={{flex:1}}
          ref="modal"  >
          <TouchableWithoutFeedback onPress={()=>{this.setState({showModal:false})}} >
          <View style={{flex:1,alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.5)',}}

            >
            <TouchableWithoutFeedback onPress={()=>{}}>
              <View style={{backgroundColor:'#fff',width:width,
                justifyContent:'center',
              }}

              >
                <View style={styles.headStyle}>
                  <Text style={styles.headText} onPress={()=>{this.setState({showModal:false})}}>
                    {this.state.course}
                  </Text>
                  <TouchableOpacity style={{marginLeft:10}}
                    onPress={()=>{this.setState({showModal:false})}}
                    hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Image style={styles.arrStyle} resizeMode = 'contain' source={this.state.arrow_up}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.courseWrap}>
                  {this.courseItemFun(CourseItemArr)}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}
class CourseItem extends Component{
  render(){
    return(
      <View style={[styles.boxView, this.props.course?"":styles.opacitys]}>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={{padding:scaleSize(10)}}>
            <Text style={{fontSize:scaleSize(20),fontWeight:'bold'}}>{this.props.course}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

var cols = 3;
var boxW = 70;
var vMargin = (width-cols*boxW)/(cols+1);
var hMargin = 25;
const styles = StyleSheet.create({
   arrStyle:{
    width:scaleSize(20),
    height:scaleSize(20),
    resizeMode:'contain',
  },
  boxView:{
    justifyContent:'center',
    alignItems:'center',
    width: scaleSize(130),
    paddingLeft: scaleSize(10),
    paddingRight: scaleSize(10),
    marginTop:scaleSize(20),
    marginLeft: scaleSize(10),
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'#999',
    borderRadius:5,
  },
  opacitys: {
    opacity: 0,
  },
  courseWrap:{
    flexWrap: 'wrap',
    flexDirection:'row',
    width: scaleSize(730),
    paddingLeft: scaleSize(10),
    paddingRight: scaleSize(10),
    justifyContent:'space-between',
    alignItems: 'center',
  },
  headText:{
    fontSize:scaleSize(28),
  },
  headStyle:{
    flexDirection:'row',
    width:'100%',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#fff',
    height: scaleSize(80),
    borderColor: '#999',
    // borderBottomWidth: scaleSize(1),
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

});
