import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import subStyles from './intro.styles';

const IntroScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={subStyles.mainContainer}>
            <View style={subStyles.logTxtContainer}>
                <Image source={require('../../assets/Images/WideBag.png')} />
            </View>
            <TouchableOpacity  style={subStyles.logBtnStyle} onPress={() => navigation.dispatch(StackActions.replace('LANGCOUNTRY'))}>
                <Image source={require('../../assets/Images/logo.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default IntroScreen;