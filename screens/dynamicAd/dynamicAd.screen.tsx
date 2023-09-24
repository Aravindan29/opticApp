import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import mainStyle from '../general/general.styles';
import subStyles from './dynamicAd.styles';

const DynamicAdScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={mainStyle.mainContainer}>
            {/* AD SECTION */}
            <View style={subStyles.adContainer}>
                <Image source={require('../../assets/Images/brand.png')} />
            </View>
            {/* SUBMIT SECTION */}
            <View style={subStyles.submitContainer}>
                <TouchableOpacity style={subStyles.btnStyle} onPress={() => navigation.dispatch(StackActions.replace('APPINITAL'))}>
                    <Text style={subStyles.txtStyle}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default DynamicAdScreen;