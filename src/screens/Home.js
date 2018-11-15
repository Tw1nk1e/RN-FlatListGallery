/* eslint-disable no-use-before-define */
// @flow

import React, { PureComponent } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Item from '../components/Item/index';
import data from '../constants/data';
import { images } from '../constants/picture';

import { getHeaderHeight } from '../utils/headerHelper';

type Props = {
  navigation: any,
}

type State = {
  someItemSelect: boolean,
}

class Home extends PureComponent <Props, State> {
  constructor(props) {
    super(props);
    const { props: { navigation } } = this;
    navigation.setParams({ isButtonView: false });
  }

  static navigationOptions = ({ navigation }: {navigation: any}) => {
    const { state } = navigation;
    const isButtonView = state.params && state.params.isButtonView;
    console.log(isButtonView, 'navigate');
    return {
      headerLeft: () => (isButtonView ? (
        <TouchableWithoutFeedback
          style={styles.headerButton}
          // onPress={() => leaveChannel()}
        >
          <Image source={images.backArrow} />
        </TouchableWithoutFeedback>
      ) : null),
    };
  };

  state={
    someItemSelect: false,
  }

  renderItem = (item : {item: Object}) => {
    const headerHeight = getHeaderHeight();
    return (
      <Item
        headerHeight={headerHeight}
        onSelectItem={this.onSelectItem}
        uri={item.item.source.uri}
        title={item.item.title}
      />
    );
  }

  onSelectItem = () => {
    const { state: { someItemSelect } } = this;
    const { props: { navigation } } = this;
    this.setState({
      someItemSelect: !someItemSelect,
    }, () => {
      navigation.setParams({ isButtonView: !navigation.state.params.isButtonView });
    });
  }

  keyExtractor = ({ id }: {id: number}, index: number) => `${id || index}`;

  render() {
    const { state: { someItemSelect } } = this;
    return (
      <View>
        <FlatList
          scrollEnabled={!someItemSelect}
          numColumns={2}
          contentContainerStyle={styles.container}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default Home;
