import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    firstContainter: {
        flex: 0.6,
        backgroundColor: 'red',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
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
        alignItems: 'center',
      },
    
      textStyle: {
        fontSize: 20,
      },
    
      languageContainer: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 10,
        marginHorizontal: 10,
      },
    
      buttonRowStartContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 5,
      },
    
      buttonRowEndContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
      },
    
      buttonContainer: {
        padding: 10,
        backgroundColor: '#dedede',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 20,
        shadowColor: '#000',
        elevation: 1,
      },
    
      textBtnStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#535353',
      },
    
      onSelectBtnContainer: {
        padding: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 20,
        shadowColor: 'red',
        elevation: 1,
      },
    
      onSelectTextBtnStyle: {
        fontSize: 16,
        color: '#fff',
      },
    
      goButtonContainers: {
        width: 65,
        height: 65,
        borderRadius: 35,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fff',
        shadowColor: 'red',
        shadowRadius: 10,
        shadowOpacity: 10.6,
        elevation: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
    
      goIconStyle: {
        fontSize: 30,
        color: 'red',
      },
      animatedContainer: {
        position: 'absolute',
        top: '88%',
        bottom: 0,
        right: 0,
        left: '68%',
        marginHorizontal: 25,
        borderRadius: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
      }
});