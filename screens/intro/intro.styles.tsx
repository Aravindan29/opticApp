import { StyleSheet } from 'react-native';
import Code from '../../constants/ColorCode';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Code.white
    },

    logTxtContainer: {
        margin: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logBtnStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});