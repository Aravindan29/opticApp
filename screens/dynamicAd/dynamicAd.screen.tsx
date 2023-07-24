import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const DynamicAdScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 15 }} onPress={() => navigation.dispatch(StackActions.replace('APPINITAL'))}>
                <Text style={{ color: 'white'}}>Dynamic Ad</Text>
            </TouchableOpacity>
        </View>
    )
}
export default DynamicAdScreen;