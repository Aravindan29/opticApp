import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import subStyles from './languageCountry.styles';

const LanguageCountryScreen = () => {
    const navigation = useNavigation<any>();
    const [lang, setLang] = useState('en');
    const [coun, setCoun] = useState('India');

    return (
        <SafeAreaView style={subStyles.mainContainer}>
            <View style={subStyles.firstContainter}>
                {/* <Image
                    style={subStyles.imageStyle}
                    source={require('../../assets/images/general/logo2.png')}
                /> */}
                <Text style={subStyles.logoText}>Oticals</Text>
            </View>
            <View style={subStyles.secondContainer}>
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
                    </View>

                    <View style={subStyles.buttonRowEndContainer}>
                        <TouchableOpacity
                            style={lang === 'ta' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setLang('ta')}
                        >
                            <Text style={lang === 'ta' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>தமிழ்</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={subStyles.buttonRowStartContainer}>
                        <TouchableOpacity
                            style={lang === 'ka' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setLang('ka')}
                        >
                            <Text style={lang === 'ka' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>ಕನ್ನಡ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={subStyles.buttonRowEndContainer}>
                        <TouchableOpacity
                            style={lang === 'hi' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setLang('hi')}
                        >
                            <Text style={lang === 'hi' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>हिन्दी</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={subStyles.secondContainer}>
                <View style={subStyles.languageContainer}>
                    <View style={subStyles.titleContainer}>
                        <Text style={subStyles.textStyle}>Select Your Country</Text>
                    </View>
                    <View style={subStyles.buttonRowStartContainer}>
                        <TouchableOpacity
                            style={coun === 'India' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setCoun('India')}
                        >
                            <Text style={coun === 'India' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>India</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={subStyles.buttonRowEndContainer}>
                        <TouchableOpacity
                            style={coun === 'USA' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setCoun('USA')}
                        >
                            <Text style={coun === 'USA' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>USA</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={subStyles.buttonRowStartContainer}>
                        <TouchableOpacity
                            style={coun === 'Austrila' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setCoun('Austrila')}
                        >
                            <Text style={coun === 'Austrila' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>Austrila</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={subStyles.buttonRowEndContainer}>
                        <TouchableOpacity
                            style={coun === 'Africa' ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                            onPress={() => setCoun('Africa')}
                        >
                            <Text style={coun === 'Africa' ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>Africa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={subStyles.goButtonContainers} onPress={() => navigation.dispatch(StackActions.replace('APPDYNAMIC'))}>
                <Ionicons name="md-arrow-forward" style={subStyles.goIconStyle} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default LanguageCountryScreen;