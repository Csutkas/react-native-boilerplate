import React from 'react';
import {ScrollView, View, Text, Image, Alert} from 'react-native';
import globalStyles from '../../../style';
import Loading from '../../components/loading/loading';
import useAboutScreen from './hooks/use-about-screen';
import styles from './style';

const AboutScreen = () => {
  const {response, loading, error} = useAboutScreen();

  const renderPhotos = () => {
    return response.map((photos: any, index: number) => {
      return (
        index < 100 && (
          <View key={index}>
            <Text>{photos.title}</Text>
            <Text>{photos.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: photos.thumbnailUrl,
              }}
            />
          </View>
        )
      );
    });
  };

  if (error) {
    Alert.alert(
      'Something went wrong',
      'Sorry but we can not load content, please try again!',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );
  }

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Loading />
      </View>
    );
  }
  console.log(response[0].url);

  return (
    <View style={globalStyles.container}>
      <Text>About screen</Text>
      {/* <View>{renderPhotos()}</View> */}
      <ScrollView>{renderPhotos()}</ScrollView>
    </View>
  );
};

export default AboutScreen;
