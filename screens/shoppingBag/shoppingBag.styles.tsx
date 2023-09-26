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

  // SUBCONTAINER SECTION
  subContainer: {
    margin: 8,
  },

  headerTxt: {
    textAlign: 'center'
  },

  // CARTCONTAINER SECTION
  cartContainer: {
    margin: 5,
    borderRadius: 20,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  textStyle: {
    margin: 5,
    fontSize: 18,
    fontWeight: '500',
  },

  cartRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },

  imageStyle: {
    width: 113,
    height: 127,
  },

  buttonContainer: {
    padding: 10,
    backgroundColor: Code.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtnStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Code.white,
  },

  buttonEyeContainer: {
    padding: 10,
    backgroundColor: Code.primary_light,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textEyeBtnStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: Code.black,
  },

  imageTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Code.primary,
    backgroundColor: Code.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  imageTextStyle: {
    margin: 10,
    color: Code.white,
    fontSize: 16,
    fontWeight: '400',
  },

  // NOTIFICATION SECTION
  notifiStyle: {
    marginTop: 220,
    alignItems: 'center'
  },

});