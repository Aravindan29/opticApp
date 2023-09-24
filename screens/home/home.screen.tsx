import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import subStyles from './home.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const [appNxt, setAppNxt] = useState('');
    const [localeState, setLocaleState] = useState({
        selectedCate: 'COLORED',
        selectType: 'TOPBRANDS'
    });
    const { selectedCate, selectType } = localeState

    const nextFun = () => {
        setAppNxt('Next');
        navigation.dispatch(StackActions.replace('DYNAMICAD'));
    };

    return (
        <SafeAreaView style={mainStyle.mainContainer}>
            <Appbar.Header style={subStyles.header}>
                <Appbar.Action icon="map-marker-outline" onPress={() => { }} />
                <Appbar.Content title="Home" />
                <Appbar.Content title="WideBag" style={subStyles.appBarTitleStyle} />
                <Appbar.Action icon="filter-outline" onPress={() => navigation.dispatch(StackActions.replace('FILTER'))} />
                <Appbar.Action icon="bell-outline" onPress={() => navigation.dispatch(StackActions.replace('NOTIFICATION'))} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
            <ScrollView>
                <View style={subStyles.buttonRowStartContainer}>
                    {categoryList.map((item) => (
                        <TouchableOpacity
                            style={item.value === selectedCate ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setLocaleState({ ...localeState, selectedCate: item.value })}
                            key={item.label}
                        >
                            <Text style={subStyles.textBtnStyle}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={subStyles.adContainer}>
                    <Image source={require('../../assets/Images/Rectangle.png')} style={subStyles.imageStyle}/>
                </View>
                <View style={subStyles.buttonRowStartContainer}>
                    {typeList.map((item) => (
                        <TouchableOpacity
                            style={item.value === selectType ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setLocaleState({ ...localeState, selectType: item.value })}
                            key={item.label}
                        >
                            <Text style={subStyles.textBtnStyle}><Octicons name='dot-fill' size={20} />{' '}{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={subStyles.imageContainer}>
                    <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('COLLECTION'))}>
                        <Image source={selectedCate === 'COLORED' && selectType === 'TOPBRANDS' ? require('../../assets/Images/eyeSmall.png') : require('../../assets/Images/Rectangle8.png')}  style={subStyles.smallImageStyle}/>
                    </TouchableOpacity>
                    <Image source={require('../../assets/Images/Rectangle8.png')} style={subStyles.smallImageStyle}/>
                </View>
                <View style={subStyles.imageContainer}>
                    <Image source={require('../../assets/Images/Rectangle8.png')} style={subStyles.smallImageStyle}/>
                    <Image source={require('../../assets/Images/Rectangle8.png')} style={subStyles.smallImageStyle}/>
                </View>
                <View style={subStyles.imageContainer}>
                    <Image source={require('../../assets/Images/Rectangle8.png')} style={subStyles.smallImageStyle}/>
                    <Image source={require('../../assets/Images/Rectangle8.png')} style={subStyles.smallImageStyle}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen;