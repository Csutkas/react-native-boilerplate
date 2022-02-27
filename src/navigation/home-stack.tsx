import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './configuration/screen-names';
import HomeScreen from '../screens/home-screen/home-screen';
import AboutScreen from '../screens/about-screen/about-screen';

export type HomeStackParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Home as never}
        component={HomeScreen}
        options={() => ({})}
      />
      <Stack.Screen
        name={ScreenNames.About as never}
        component={AboutScreen}
        options={() => ({})}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
