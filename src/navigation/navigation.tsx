import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './bottom-tab-navigator';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
