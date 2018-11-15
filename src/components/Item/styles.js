// @flow

import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    padding: 5,
    backgroundColor: 'white',
    margin: 5,
    width: Dimensions.get('window').width / 2 - 10,
  },
  image: {
    height: Dimensions.get('window').height / 2.7,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  selectImage: {
    width: '100%',
    resizeMode: 'cover',
    height: Dimensions.get('window').height / 1.3,
  },
  headerButton: {
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 100,
  },
});

export const getStyles = (side, headerHeight, windowPos) => {
  const topH = windowPos.y != null ? windowPos.y : 0;
  const addHeight = topH < 0 ? topH : 0;
  const widthSize = -Dimensions.get('window').width / 4;
  let generalItemStyle = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + (-addHeight),
    zIndex: 2,
    top: -topH + headerHeight,
    backgroundColor: 'white',
  };
  if (side) {
    generalItemStyle = { ...generalItemStyle, right: widthSize };
  } else {
    generalItemStyle = { ...generalItemStyle, left: widthSize };
  }

  return (
    StyleSheet.create({ generalItemStyle })
  );
};
