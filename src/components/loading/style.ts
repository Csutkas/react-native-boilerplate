import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerLoading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
      height: 50,
      width: 50,
  }
});

export default styles;
