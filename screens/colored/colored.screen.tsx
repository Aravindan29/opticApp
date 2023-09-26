import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons, Feather, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import Code from '../../constants/ColorCode';
import subStyles from './colored.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { coloredCategoryList } from '../../redux/common/common.func';

const ColoredScreen = () => {
    const navigation = useNavigation<any>();
    const [appNxt, setAppNxt] = useState('');
    const [localeState, setLocaleState] = useState({
        selectedCate: 'ALL',
        diamondHeart: false,
        eliteHeart: false,
        dsHeart: false,
        glowHeart: false,
    });
    const { selectedCate, diamondHeart, eliteHeart, dsHeart, glowHeart } = localeState;

    const loadRenderData = ({ item }) => {
        return (
            <View key={item.label} style={subStyles.btnContainer}>
                <TouchableOpacity
                    style={item.value === selectedCate ? subStyles.onSelectBtnContainer : subStyles.buttonContainer}
                    onPress={() => setLocaleState({ ...localeState, selectedCate: item.value })}
                    key={item.label}
                >
                    <Text style={item.value === selectedCate ? subStyles.onSelectTextBtnStyle : subStyles.textBtnStyle}>{item.label}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const favDiamond = () => {
        if (diamondHeart === false) {
            setLocaleState({ ...localeState, diamondHeart: true });
        } else {
            setLocaleState({ ...localeState, diamondHeart: false });
        }
    };

    const favElite = () => {
        if (eliteHeart === false) {
            setLocaleState({ ...localeState, eliteHeart: true });
        } else {
            setLocaleState({ ...localeState, eliteHeart: false });
        }
    };

    const favDS = () => {
        if (dsHeart === false) {
            setLocaleState({ ...localeState, dsHeart: true });
        } else {
            setLocaleState({ ...localeState, dsHeart: false });
        }
    };

    const favGlow = () => {
        if (glowHeart === false) {
            setLocaleState({ ...localeState, glowHeart: true });
        } else {
            setLocaleState({ ...localeState, glowHeart: false });
        }
    };

    return (
        <SafeAreaView style={mainStyle.mainContainer}>
            <Appbar.Header style={subStyles.header}>
                <Appbar.BackAction onPress={() => navigation.dispatch(StackActions.replace('COLLECTION'))} />
                <Appbar.Content title="Colored" style={subStyles.appBarTitleStyle} />
                <Appbar.Action icon="heart-outline" onPress={() => navigation.dispatch(StackActions.replace('FILTER'))} />
                <Appbar.Action icon="shopping-outline" onPress={() => navigation.dispatch(StackActions.replace('NOTIFICATION'))} />
            </Appbar.Header>
            <ScrollView style={subStyles.secondScroll}>
                <View>
                    {coloredCategoryList !== null && coloredCategoryList !== undefined ?
                        <FlatList
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            data={coloredCategoryList}
                            renderItem={(item) => loadRenderData(item)}
                            keyExtractor={item => item.label}
                            style={subStyles.scrollFlex}
                        />
                        : null}
                </View>
                <View style={subStyles.imageContainer}>
                    {selectedCate === 'ALL' || selectedCate === 'DNC' || selectedCate === 'DIAMONDS' ? <View>
                        <TouchableOpacity style={subStyles.imageTopTextContainer} onPress={favDiamond}>
                            <Text style={subStyles.imageTopTextStyle}>Diamond Silver Mist</Text>
                            <Ionicons name={diamondHeart === false ? 'heart-outline' : 'heart'} size={27} color={diamondHeart === false ? Code.gray : Code.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('DETAILS'))}>
                            <Image source={require('../../assets/Images/CModel1.png')} style={subStyles.smallImageStyle} />
                            <View style={subStyles.imageTextContainer}>
                                <Text style={subStyles.imageTextStyle}>USD 459.99</Text>
                            </View>
                        </TouchableOpacity>
                    </View> : null}
                    {selectedCate === 'ALL' || selectedCate === 'ELITE' ?
                        <View>
                            <TouchableOpacity style={subStyles.imageTopTextContainer} onPress={favElite}>
                                <Text style={subStyles.imageTopTextStyle}>Elite</Text>
                                <Ionicons name={eliteHeart === false ? 'heart-outline' : 'heart'} size={27} color={eliteHeart === false ? Code.gray : Code.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('DETAILS'))}>
                                <Image source={require('../../assets/Images/CModel2.png')} style={subStyles.smallImageStyle} />
                                <View style={subStyles.imageTextContainer}>
                                    <Text style={subStyles.imageTextStyle}>USD 459.99</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : null}
                </View>
                <View style={subStyles.imageContainer}>
                    {selectedCate === 'ALL' || selectedCate === '1DS' ?
                        <View>
                            <TouchableOpacity style={subStyles.imageTopTextContainer} onPress={favDS}>
                                <Text style={subStyles.imageTopTextStyle}>1 DAY Secret</Text>
                                <Ionicons name={dsHeart === false ? 'heart-outline' : 'heart'} size={27} color={dsHeart === false ? Code.gray : Code.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('DETAILS'))}>
                                <Image source={require('../../assets/Images/CModel3.png')} style={subStyles.smallImageStyle} />
                                <View style={subStyles.imageTextContainer}>
                                    <Text style={subStyles.imageTextStyle}>USD 459.99</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : null}
                    {selectedCate === 'ALL' || selectedCate === 'GLOW' ?
                        <View>
                            <TouchableOpacity style={subStyles.imageTopTextContainer} onPress={favGlow}>
                                <Text style={subStyles.imageTopTextStyle}>Glow</Text>
                                <Ionicons name={glowHeart === false ? 'heart-outline' : 'heart'} size={27} color={glowHeart === false ? Code.gray : Code.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('DETAILS'))}>
                                <Image source={require('../../assets/Images/CModel4.png')} style={subStyles.smallImageStyle} />
                                <View style={subStyles.imageTextContainer}>
                                    <Text style={subStyles.imageTextStyle}>USD 459.99</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : null}
                </View>
            </ScrollView>
            <View style={subStyles.bottomStartContainer}>
                <TouchableOpacity style={subStyles.imageBottomTextContainer}>
                    <MaterialCommunityIcons name='arrow-up-down' size={16} color={Code.black} />
                    <Text style={subStyles.textBottomBtnStyle}>Sort By</Text>
                </TouchableOpacity>
                <TouchableOpacity style={subStyles.imageBottomTextContainer}>
                    <Ionicons name='filter' size={16} color={Code.black} />
                    <Text style={subStyles.textBottomBtnStyle}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={subStyles.imageBottomTextContainer}>
                    <Ionicons name='list' size={16} color={Code.black} />
                    <Text style={subStyles.textBottomBtnStyle}>List View</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ColoredScreen;