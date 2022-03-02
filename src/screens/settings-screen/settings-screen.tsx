import React from 'react';
import {Text, View} from 'react-native';
import globalStyles from '../../../style';
import {useAxios} from '../../logic/helpers/use-axios';

const SettingsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Settings screen</Text>
    </View>
  );
};

export default SettingsScreen;
