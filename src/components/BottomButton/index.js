/* eslint-disable no-use-before-define */
// @flow

import React, { PureComponent } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import { styles } from './styles';
import { images } from '../../constants/picture';

class BottomButtons extends PureComponent <null, null> {
  itemRef: any;

  // handleAnimation = () => {
  //   LayoutAnimation.configureNext(CustomLayoutAnimation);
  // }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
      >
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          ref={(ref) => { this.itemRef = ref; }}
        >
          <View
            style={styles.button}
            ref={(ref) => { this.itemRef = ref; }}
          >
            <Image source={images.home} />
          </View>
          <View
            style={styles.button}
            ref={(ref) => { this.itemRef = ref; }}
          >
            <Image source={images.account} />
          </View>
          <View
            style={styles.button}
            ref={(ref) => { this.itemRef = ref; }}
          >
            <Image source={images.build} />
          </View>
          <View
            style={styles.button}
            ref={(ref) => { this.itemRef = ref; }}
          >
            <Image source={images.calendar} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default BottomButtons;
