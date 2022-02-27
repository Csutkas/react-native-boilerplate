import { StyleSheet } from 'react-native';

const globalStyles = 
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    flex: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
    },
   
    /* Fonts */    
    header1: {
      fontSize: 30,
    },
    header2: {
      fontSize: 24,
    },
    header3: {
      fontSize: 18,
    },
    header4: {
      fontSize: 16,
    },
    text: {
      fontSize: 14,
    },
  });

export default globalStyles;
