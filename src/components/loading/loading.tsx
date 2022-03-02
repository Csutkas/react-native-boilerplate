import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './style';

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Loading;
