/* eslint-disable no-use-before-define */
// @flow

import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';

import BottomButtons from '../BottomButton/index';

import { CustomLayoutAnimation } from '../../constants/animationConfig';
import { styles, getStyles } from './styles';

type Props = {
  uri: string,
  title: string,
  onSelectItem: Function,
  headerHeight: number,
};

type State = {
  animatedValue: any,
  windowPos: any,
  select: boolean,
  isSelectItemOnLeft: boolean,
}

class Item extends PureComponent <Props, State> {
  state={
    windowPos: {},
    select: false,
    isSelectItemOnLeft: null,
  }

  itemRef: any;

  onPress = () => {
    const { state: { select } } = this;
    const { props: { onSelectItem } } = this;
    this.itemRef.measureInWindow((x, y) => {
      if (x > styles.item.margin) {
        this.setState({
          select: !select,
          windowPos: { x, y },
          isSelectItemOnLeft: false,
        });
        this.handleAnimation();
      } else {
        this.setState({
          select: !select,
          windowPos: { x, y },
          isSelectItemOnLeft: true,
        });
        this.handleAnimation();
      }
    });
    onSelectItem();
  }

  handleAnimation = () => {
    LayoutAnimation.configureNext(CustomLayoutAnimation);
  }

  render() {
    const { state: { select, windowPos, isSelectItemOnLeft } } = this;
    const { props: { uri, title, headerHeight } } = this;
    const { generalItemStyle } = getStyles(isSelectItemOnLeft, headerHeight, windowPos);
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
      >
        <View
          style={select ? generalItemStyle : styles.item}
          ref={(ref) => { this.itemRef = ref; }}
        >
          <Image
            style={!select ? styles.image : styles.selectImage}
            source={{ uri }}
          />
          {select && <BottomButtons />}
          {!select && (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 5 }}>
              <Text style={{ width: '80%', margin: 5, fontSize: 15 }}>
                {title != null ? title : null}
              </Text>
              <Text style={{ width: '80%', fontSize: 30 }}>
               ...
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Item;
