import { StyleSheet } from 'react-native';
import Code from '../../constants/ColorCode';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Code.white,
    },

    padding10: {
      padding: 10,
    },

    subContainter: {
        // flex: 0.6,
        // backgroundColor: 'red',
        // borderBottomLeftRadius: 55,
        // borderBottomRightRadius: 55,
        // justifyContent: 'center',
        // alignItems: 'center',
        // margin: 20,
    },

    logoText: {
        color: Code.white,
        fontSize: 35,
        top: '5%',
    },

    secondContainer: {
        flex: 0.6,
        justifyContent: 'center',
      },
    
      titleContainer: {
        margin: 10,
      },
    
      textStyle: {
        fontSize: 15,
      },
    
      languageContainer: {
        // flex: 1,
        // flexDirection: 'column',
        // marginVertical: 10,
        // marginHorizontal: 10,
      },
    
      buttonRowStartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
      },
    
      buttonRowEndContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
      },
    
      buttonContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: Code.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderRadius: 20,
      },
    
      textBtnStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: Code.primary,
      },
    
      onSelectBtnContainer: {
        padding: 10,
        backgroundColor: Code.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderRadius: 20,
        shadowColor: Code.black,
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
      },
    
      onSelectTextBtnStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: Code.primary,
      },

      buttonContainerCoun: {
        padding: 10,
        borderWidth: 1,
        borderColor: Code.secondary,
        borderRadius: 20,
        marginVertical: 10,
      },

      textBtnStyleCoun: {
        fontSize: 16,
        fontWeight: '400',
        color: Code.primary,
      },
    
      onSelectBtnContainerCoun: {
        padding: 10,
        backgroundColor: Code.primary_light,
        borderRadius: 20,
        shadowColor: Code.black,
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
        marginVertical: 10,
      },
    
      onSelectTextBtnStyleCoun: {
        fontSize: 20,
        fontWeight: '400',
        color: Code.primary,
      },
    
   
     
      // SUBMIT SECTION
      submitContainer: {
        position: 'absolute',
        bottom: 0, 
        top: '90%', 
        left: 0, 
        right: 0, 
        justifyContent: 'center', 
        margin: 10
      },   
      buttonContainerNxt: {
        padding: 10,
        backgroundColor: Code.primary_light,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Code.black,
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
      },

      textBtnStyleNxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Code.primary,
      },
    
      onSelectBtnContainerNxt: {
        padding: 10,
        backgroundColor: Code.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      onSelectTextBtnStyleNxt: {
        fontSize: 20,
        fontWeight: '400',
        color: Code.primary,
      },

});