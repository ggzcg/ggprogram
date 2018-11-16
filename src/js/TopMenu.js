import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from "react-native";

export default class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style = {styles.container}>
             <TouchableOpacity
              style = {styles.scrollCon_bg}
              onPress={() => {this.setModalVisible(false);}}
             ></TouchableOpacity>
             <View style={styles.scrollCon}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false);}}>
                  <Text style={{height: 50}}>Hide Modal</Text>
                </TouchableOpacity>
             </View>
           </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    mian: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollCon_bg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      opacity: 0.5,
      zIndex: 1,
    },
    scrollCon: {
        position: 'absolute',
        bottom: 0,
        width: 500,
        height: 250,
        backgroundColor: 'white',
        alignItems:'center',
        zIndex: 2,
    }
});
