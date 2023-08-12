import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import subStyles from './languageCountry.styles';
import { ScrollView } from 'react-native-gesture-handler';

const LanguageCountryScreen = () => {
    const navigation = useNavigation<any>();
    const [lang, setLang] = useState('en');
    const [coun, setCoun] = useState('India');
    const [appNxt, setAppNxt] = useState('');

    const nextFun = () => {
        setAppNxt('Next');
        navigation.dispatch(StackActions.replace('DYNAMICAD'));
    };

    return (
        <SafeAreaView style={subStyles.mainContainer}>
            <ScrollView>
                <View style={subStyles.subContainter}>
                    <View style={subStyles.languageContainer}>
                        <View style={subStyles.titleContainer}>
                            <Text style={subStyles.textStyle}>Select Your Language</Text>
                        </View>
                        <View style={subStyles.buttonRowStartContainer}>
                            <TouchableOpacity
                                style={lang === 'en' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                                onPress={() => setLang('en')}
                            >
                                <Text style={lang === 'en' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>English</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={lang === 'ar' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                                onPress={() => setLang('ar')}
                            >
                                <Text style={lang === 'ar' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>عربي</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={subStyles.titleContainer}>
                            <Text style={subStyles.textStyle}>Select Your Country</Text>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'India' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('India')}
                            >
                                <Text style={coun === 'India' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}India</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'UAE' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('UAE')}
                            >
                                <Text style={coun === 'UAE' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}UAE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'USA' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('USA')}
                            >
                                <Text style={coun === 'USA' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}USA</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'AUS' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('AUS')}
                            >
                                <Text style={coun === 'AUS' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}Austrila</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'AFR' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('AFR')}
                            >
                                <Text style={coun === 'AFR' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}Africa</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'JPN' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('JPN')}
                            >
                                <Text style={coun === 'JPN' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}Japan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'CHI' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('CHI')}
                            >
                                <Text style={coun === 'CHI' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}China</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'INO' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('INO')}
                            >
                                <Text style={coun === 'INO' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}Indonesia</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'RUS' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('RUS')}
                            >
                                <Text style={coun === 'RUS' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}Russia</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={subStyles.counButtonContainer}>
                            <TouchableOpacity
                                style={coun === 'LON' ? subStyles.onSelectBtnContainerCoun : subStyles.buttonContainerCoun}
                                onPress={() => setCoun('LON')}
                            >
                                <Text style={coun === 'LON' ? subStyles.onSelectTextBtnStyleCoun : subStyles.textBtnStyleCoun}><Feather name='plus' size={20} />{'  '}London</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={subStyles.counButtonContainer}>
                        <TouchableOpacity
                            style={appNxt === 'Next' ? subStyles.onSelectBtnContainerNxt : subStyles.buttonContainerNxt}
                            onPress={nextFun}
                        >
                            <Text style={appNxt === 'Next' ? subStyles.onSelectTextBtnStyleNxt : subStyles.textBtnStyleNxt}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LanguageCountryScreen;