import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import Code from '../../constants/ColorCode';
import subStyles from './shoppingBag.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';
import { removeCartStart } from '../../redux/login/login.actions';
import { cartFilterItems } from '../../redux/login/login.selectors';

const ShopBagScreen = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(cartFilterItems);
    const navigation = useNavigation<any>();
    const [appNxt, setAppNxt] = useState('');
    const [localeState, setLocaleState] = useState({
        selectedCate: 'COLORED',
        selectType: 'TOPBRANDS'
    });
    const { selectedCate, selectType } = localeState;

    const removeCart = () => {
        dispatch(removeCartStart());
    };

    return (
        <SafeAreaView style={mainStyle.mainContainer}>
            <Appbar.Header style={subStyles.header}>
                <Appbar.BackAction onPress={() => navigation.dispatch(StackActions.replace('APPINITAL'))} />
                <Appbar.Content title="Shop Bag" />
            </Appbar.Header>
            <ScrollView>
                {cartList !== undefined && cartList !== null ?
                    <View style={subStyles.subContainer}>
                        <Text style={subStyles.headerTxt}>PRODUCTS ADDED</Text>
                        <View style={subStyles.cartContainer}>
                            <View style={subStyles.textContainer}>
                                <Text style={subStyles.textStyle}>Diamond Silver Mist</Text>
                                <TouchableOpacity onPress={removeCart}>
                                    <Feather name='x' size={22} color={Code.black} />
                                </TouchableOpacity>
                            </View>
                            <View style={subStyles.cartRowContainer}>
                                <Image source={require('../../assets/Images/CartModel1.png')} style={subStyles.imageStyle} />
                                <View>
                                    <Text style={subStyles.textStyle}>Bella | Diamonds New Color</Text>
                                    <View style={subStyles.cartRowContainer}>
                                        <View>
                                            <TouchableOpacity
                                                style={subStyles.buttonContainer}
                                            >
                                                <Text style={subStyles.textBtnStyle}>Left Eye <Ionicons name='eye-outline' size={18} color={Code.white} /></Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={subStyles.buttonEyeContainer}
                                            >
                                                <Text style={subStyles.textEyeBtnStyle}>{cartList.selectedleftEyePower}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={subStyles.buttonContainer}
                                            >
                                                <Text style={subStyles.textBtnStyle}>Right Eye <Ionicons name='eye-outline' size={18} color={Code.white} /></Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={subStyles.buttonEyeContainer}
                                            >
                                                <Text style={subStyles.textEyeBtnStyle}>{cartList.selectedRihtEyePower}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={subStyles.imageTextContainer}>
                                <Text style={subStyles.imageTextStyle}>Subtotal</Text>
                                <Text style={subStyles.imageTextStyle}>USD 459.99</Text>
                            </View>
                        </View>
                    </View>
                    : <View style={subStyles.notifiStyle}>
                        <Feather name='shopping-bag' size={150} color={Code.primary} />
                        <Text>Shop Bag is empty</Text>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default ShopBagScreen;