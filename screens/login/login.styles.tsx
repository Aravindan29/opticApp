import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex:1, 
        flexDirection: 'column'
    },

    subContainer : {
        flex: 1,
        margin: 15, 
        justifyContent: 'center',
    },

    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },

    btnStyle: {
        backgroundColor: 'red', 
        padding: 13, 
        borderRadius: 15,
        alignItems: 'center'
    },

    btnTextStyle: {
        color: 'white',
    }
});