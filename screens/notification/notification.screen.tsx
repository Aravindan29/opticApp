import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import Code from '../../constants/ColorCode';
import subStyles from './notification.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';

const NotificationScreen = () => {
    const navigation = useNavigation<any>();
    const [appNxt, setAppNxt] = useState('');
    const [localeState, setLocaleState] = useState({
        selectedCate: 'COLORED',
        selectType: 'TOPBRANDS'
    });
    const { selectedCate, selectType } = localeState;

    return (
        <SafeAreaView style={mainStyle.mainContainer}>
            <Appbar.Header style={subStyles.header}>
                <Appbar.BackAction onPress={() => navigation.dispatch(StackActions.replace('APPINITAL'))} />
                <Appbar.Content title="Notification" />
            </Appbar.Header>
            <ScrollView>
                <View style={subStyles.notifiStyle}>
                    <Ionicons name='notifications-outline' size={150} color={Code.primary} />
                    <Text>No Notifications</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default NotificationScreen;