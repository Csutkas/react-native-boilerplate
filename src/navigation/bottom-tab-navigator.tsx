import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenNames from './configuration/screen-names';
import StackNames from './configuration/stack-names';
import HomeStack from './home-stack';
import SettingsStack from './settings-stack';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Home}
      screenOptions={{
        /* unmountOnBlur: Whether this screen should be unmounted when navigating away from it.
        Unmounting a screen resets any local state in the screen as well as state of nested navigators in the screen. */
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarItemStyle: {},
        tabBarStyle: {},
        headerShown: false,
      }}>
      <Tab.Screen
        name={StackNames.HomeStack as never}
        component={HomeStack}
        options={{}}
      />
      <Tab.Screen
        name={StackNames.SettingsStack as never}
        component={SettingsStack}
        options={{}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
