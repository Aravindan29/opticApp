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

  // SMALL IMAGE SECTION
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  smallImageStyle: {
    width: 167,
    height: 108,
  },

});