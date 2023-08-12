import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import subStyles from './dynamicAd.styles';

const DynamicAdScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={subStyles.mainContainer}>
            <View style={subStyles.logTxtContainer}>
                <Image style={subStyles.imgStyle} source={require('../../assets/Images/brand.png')} />
            </View>
            <View style={subStyles.alignStyle}>
                <TouchableOpacity style={subStyles.btnStyle} onPress={() => navigation.dispatch(StackActions.replace('APPINITAL'))}>
                    <Text style={subStyles.txtStyle}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DynamicAdScreen;