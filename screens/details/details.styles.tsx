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

  // SUB SECTION
  subContainer: {
    margin: 10,
  },

  mainTextStyle: {
    fontSize: 22,
    fontWeight: '400',
    color: Code.black,
  },

  // IMAGE SECTION
  imageStyle: {
    width: 340,
    height: 265,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },

  rowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textStyle : {
    fontSize: 15,
    fontWeight: '400',
    color: Code.black,
    marginTop: 10,
  },

  textBoldStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: Code.black,
    marginTop: 10,
  },

  textUsdStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: Code.primary,
  },

  textUsdBigStyle: {
    fontSize: 30,
    fontWeight: '600',
    color: Code.primary,
  },

  prodDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  bottomBtnRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },

  buttonContainer: {
    padding: 10,
    backgroundColor: Code.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    borderRadius: 20,
  },

  textBtnStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Code.white,
  },

});