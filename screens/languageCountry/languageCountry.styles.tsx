import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffff'
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
        color: '#ffffff',
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

      counButtonContainer: {
        margin: 10,
      },
    
      buttonRowEndContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
      },
    
      buttonContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#79747E',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderRadius: 20,
      },
    
      textBtnStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#6750A4',
      },
    
      onSelectBtnContainer: {
        padding: 10,
        backgroundColor: '#F7F2FA',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
      },
    
      onSelectTextBtnStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#6750A4',
      },

      buttonContainerCoun: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#79747E',
        borderRadius: 20,
      },

      textBtnStyleCoun: {
        fontSize: 16,
        fontWeight: '400',
        color: '#6750A4',
      },
    
      onSelectBtnContainerCoun: {
        padding: 10,
        backgroundColor: '#F7F2FA',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
      },
    
      onSelectTextBtnStyleCoun: {
        fontSize: 20,
        fontWeight: '400',
        color: '#6750A4',
      },
    
      buttonContainerNxt: {
        padding: 10,
        backgroundColor: '#F7F2FA',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
      },

      textBtnStyleNxt: {
        fontSize: 16,
        fontWeight: '400',
        color: '#6750A4',
      },
    
      onSelectBtnContainerNxt: {
        padding: 10,
        backgroundColor: '#6750A4',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      onSelectTextBtnStyleNxt: {
        fontSize: 20,
        fontWeight: '400',
        color: '#6750A4',
      },
});