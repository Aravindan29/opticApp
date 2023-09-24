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

  // FIRST SCROLL VIEW SECTION
  scrollFlex: {
    flex: 1,
    marginTop: 5,
  },

  btnContainer: {
    margin: 5,
  },

  onSelectBtnContainer: {
    padding: 10,
    backgroundColor: Code.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: Code.black,
    shadowOffset: { height: 1, width: 15 },
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 4,
  },

  buttonContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: Code.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  onSelectTextBtnStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: Code.white,
  },

  textBtnStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: Code.primary,
  },

  // SECOND SCROLL VIEW SECTION
  secondScroll: {
    // marginBottom: '55%',
  },

  // SMALL IMAGE SECTION
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

  imageTopTextContainer: {
    borderColor: Code.border_shadow,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },

  imageTopTextStyle: {
    margin: 5,
    color: Code.black,
    fontSize: 16,
    fontWeight: '400',
  },

  imageTextContainer: {
    borderColor: Code.primary,
    backgroundColor: Code.primary,
  },

  imageTextStyle: {
    margin: 10,
    textAlign: 'center',
    color: Code.white,
    fontSize: 16,
    fontWeight: '400',
  },

  // BOTTOM SECTION
  bottomStartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: Code.secondary_light,
  },

  imageBottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  textBottomBtnStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: Code.primary,
  },

});