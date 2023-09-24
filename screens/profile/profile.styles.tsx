import { StyleSheet } from 'react-native';
import Code from '../../constants/ColorCode';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Code.white
  },

  // HEADER SECTION
  header: {
    shadowColor: Code.shadow,
    elevation: 8,
  },

  // SUB SECTION
  subContainer: {
    margin: 5
  },

  ImageStyle: {
    margin: 5,
    width: 340,
    height: 68,
  },

});