import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffff'
    },

    logTxtContainer: {
        margin: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgStyle: {
        // width: '140%'
        marginLeft: -15
    },

    alignStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnStyle: {
        padding: 10,
        backgroundColor: '#F7F2FA',
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
        color: '#6750A4',
    },
});