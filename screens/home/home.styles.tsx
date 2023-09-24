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

  // CATEGORY SECTION
  buttonRowStartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
    backgroundColor: Code.secondary_light,
  },

  buttonContainer: {
    padding: 10,
    borderColor: Code.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtnStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Code.black,
  },

  onSelectBtnContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Code.primary,
    borderBottomWidth: 2,
  },

  // MAIN IMAGE SECTION
  adContainer: {
    margin: 15,
  },

  imageStyle: {
    width: 335,
    height: 192,
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