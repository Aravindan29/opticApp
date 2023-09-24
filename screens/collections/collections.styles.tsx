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

  // APPBAR TITLE SECTION
  appBarTitleStyle: {
    alignItems: 'center'
  },

  // IMAGE SECTION
  subContainer: {
    margin: 10,
    alignItems: 'center'
  },

  imageStyle: {
    width: 374,
    height: 192,
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  buttonContainerNxt: {
    shadowColor: Code.black,
    shadowOffset: { height: 1, width: 15 },
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 4,
  },

  smallImageStyle: {
    width: 165,
    height: 192,
  },

  imageTextContainer: {
    borderColor: Code.primary,
    backgroundColor: Code.primary,
  },

  imageTextStyle: {
    margin: 10,
    textAlign: 'center',
    color: Code.white
  },

});