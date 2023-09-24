import { StyleSheet } from 'react-native';
import Code from '../../constants/ColorCode';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Code.white
    },
    // AD SECTION
    adContainer: {
        flex: 0.7,
        justifyContent: 'center'
    },
    

    // SUBMIT SECTION
    submitContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        padding: 10,
        backgroundColor: Code.primary_light,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 15 },
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 4,
    },

    txtStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: Code.primary,
    },
});