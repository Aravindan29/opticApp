import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import Code from '../../constants/ColorCode';
import subStyles from './details.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';

const DetailsScreen = () => {
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
                <Appbar.BackAction onPress={() => navigation.dispatch(StackActions.replace('COLORED'))} />
                <Appbar.Content title="Details" style={subStyles.appBarTitleStyle} />
                <Appbar.Action icon="share-variant-outline" onPress={() => navigation.dispatch(StackActions.replace('FILTER'))} />
                <Appbar.Action icon="heart-outline" onPress={() => navigation.dispatch(StackActions.replace('FILTER'))} />
                <Appbar.Action icon="shopping-outline" onPress={() => navigation.dispatch(StackActions.replace('NOTIFICATION'))} />
            </Appbar.Header>
            <ScrollView>
                <View style={subStyles.subContainer}>
                    <Text style={subStyles.mainTextStyle}>Diamond Silver Mist</Text>
                    <Text>Meta Description text space</Text>
                    <Image source={require('../../assets/Images/BModel.png')} style={subStyles.imageStyle} />
                    <View style={subStyles.rowContainer}>
                        <Text style={subStyles.textStyle}>Price</Text>
                        <Text style={subStyles.textStyle}>Quantity</Text>
                    </View>
                    <View style={subStyles.rowContainer}>
                        <Text style={subStyles.textUsdStyle}>USD <Text style={subStyles.textUsdBigStyle}>459.99</Text></Text>
                        <Text style={subStyles.textStyle}></Text>
                    </View>
                    <Text style={subStyles.textStyle}>Brand</Text>
                    <Text style={subStyles.textBoldStyle}>Bella | Diamonds New Color</Text>
                    <Text style={subStyles.textStyle}>Product Description</Text>
                    <Text style={subStyles.textBoldStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text style={subStyles.textStyle}>Product Details</Text>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><Feather name='package' size={18} color={Code.black} /> PACKAGING</Text>
                        <Text style={subStyles.textBoldStyle}>: One box contains 2 lenses</Text>
                    </View>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><Ionicons name='checkmark-circle-outline' size={18} color={Code.black} /> PEPLACEMENT</Text>
                        <Text style={subStyles.textBoldStyle}>: 3 Months disposable</Text>
                    </View>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><Feather name='circle' size={18} color={Code.black} /> LENS MATERIAL</Text>
                        <Text style={subStyles.textBoldStyle}>: 38%H2o, Polymacon</Text>
                    </View>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><Ionicons name='color-palette-outline' size={18} color={Code.black} /> LENS SEGMENT</Text>
                        <Text style={subStyles.textBoldStyle}>: Colored Lens</Text>
                    </View>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><MaterialCommunityIcons name='relative-scale' size={18} color={Code.black} /> DIAMETER</Text>
                        <Text style={subStyles.textBoldStyle}>: 14.5</Text>
                    </View>
                    <View style={subStyles.prodDetailsContainer}>
                        <Text style={subStyles.textStyle}><Ionicons name='return-up-back-outline' size={18} color={Code.black} /> BASE CURVE</Text>
                        <Text style={subStyles.textBoldStyle}>: 8.6</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={subStyles.bottomBtnRowContainer}>
                <TouchableOpacity
                    style={subStyles.buttonContainer}
                >
                    <Text style={subStyles.textBtnStyle}><Ionicons name='eye-outline' size={18} color={Code.white} /> SELECT POWER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={subStyles.buttonContainer}
                >
                    <Text style={subStyles.textBtnStyle}><Octicons name='plus' size={18} color={Code.white} /> ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default DetailsScreen;