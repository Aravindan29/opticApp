import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import subStyles from './languageCountry.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { langList, countryList } from '../../redux/common/common.func';

const LanguageCountryScreen = () => {
    const navigation = useNavigation<any>();
    const [appNxt, setAppNxt] = useState('');
    const [localeState, setLocaleState] = useState({
        selectedLang: 'en',
        selectedCountry: 'India',
    });
    const { selectedLang, selectedCountry } = localeState

    const nextFun = () => {
        setAppNxt('Next');
        navigation.navigate('DYNAMICAD');
    };

    return (
        <SafeAreaView style={mainStyle.mainContainer}>
            <ScrollView>
                <View style={subStyles.subContainter}>
                    <View style={subStyles.languageContainer}>
                        <View style={subStyles.titleContainer}>
                            <Text style={subStyles.textStyle}>Select Your Language</Text>
                        </View>
                        <View style={subStyles.buttonRowStartContainer}>
                            {langList.map((item) => (
                                <TouchableOpacity
                                    style={item.value === selectedLang ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                                    onPress={() => setLocaleState({ ...localeState, selectedLang: item.value })}
                                    key={item.label}
                                >
                                    <Text style={item.value === selectedLang ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <View style={subStyles.titleContainer}>
                            <Text style={subStyles.textStyle}>Select Your Country</Text>
                        </View>
                        <View style={subStyles.padding10}>
                            {countryList.map((item) => (
                                <TouchableOpacity
                                    style={selectedCountry === item.value ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                    onPress={() => setLocaleState({ ...localeState, selectedCountry: item.value })}
                                    key={item.label}
                                >
                                    <Text style={selectedCountry === item.value ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}{item.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={subStyles.submitContainer}>
                <TouchableOpacity
                    style={appNxt === 'Next' ? subStyles.onSelectBtnContainerNxt : subStyles.buttonContainerNxt}
                    onPress={nextFun}
                >
                    <Text style={appNxt === 'Next' ? subStyles.onSelectTextBtnStyleNxt : subStyles.textBtnStyleNxt}>Apply</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default LanguageCountryScreen;