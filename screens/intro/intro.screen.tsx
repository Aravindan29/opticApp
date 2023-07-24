import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const IntroScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 15 }} onPress={() => navigation.dispatch(StackActions.replace('APPLANGCOUNTRY'))}>
                <Text style={{ color: 'white'}}>Your content goes here</Text>
            </TouchableOpacity>
        </View>
    )
}
export default IntroScreen;