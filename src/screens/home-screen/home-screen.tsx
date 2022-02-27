import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import ScreenNames from '../../navigation/configuration/screen-names';
import globalStyles from '../../../style';
import Assets from '../../assets';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Image source={Assets.general_images.blank} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.About as never)}>
        <Text style={globalStyles.header3}>Navigate to about screen -&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
