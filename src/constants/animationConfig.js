// @flow

import { LayoutAnimation } from 'react-native';

export const CustomLayoutAnimation = {
  duration: 250,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeOut,
  },
};
