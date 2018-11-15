// @flow

import { createStackNavigator } from 'react-navigation';

import { routeNames } from './routeNames';

import Home from '../screens/Home';

export const MainNavigator = createStackNavigator({
  [routeNames.home]: {
    screen: Home,
  },
}, {
  cardStyle: { backgroundColor: 'white' },
});
