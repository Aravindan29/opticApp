import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import subStyles from './filter.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';

const FilterScreen = () => {
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
                <Appbar.Content title="Filter" />
            </Appbar.Header>
            <ScrollView>
                <View style={subStyles.subContainer}>
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                    <Image source={require('../../assets/Images/Rectangle11.png')} style={subStyles.ImageStyle} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FilterScreen;