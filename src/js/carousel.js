import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from 'antd-mobile-rn';
import {scaleSize, scaleHeight} from '../../utils/AdapterUtil'

export default class BasicCarousel extends Component {
  onHorizontalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
  };
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
  };
  render() {
    return (
      <View style={{ marginTop: scaleSize(15) }}>
        <View style={{ paddingHorizontal: scaleSize(15) }}>
          <Carousel
            style={styles.wrapper}
            selectedIndex={0}
            autoplay
            infinite
            vertical = 'true'
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.containerHorizontal, { backgroundColor: 'fuchsia' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
