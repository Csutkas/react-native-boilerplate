import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './configuration/screen-names';
import SettingsScreen from '../screens/settings-screen/settings-screen';

export type SettingsStackParamList = {
  Settings: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Settings as never}
        component={SettingsScreen}
        options={() => ({})}
      />
    </Stack.Navigator>
  );
};
export default SettingsStack;
