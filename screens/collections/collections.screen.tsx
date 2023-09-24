import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather, Octicons } from '@expo/vector-icons';
import mainStyle from '../general/general.styles';
import Code from '../../constants/ColorCode';
import subStyles from './collections.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { categoryList, typeList } from '../../redux/common/common.func';

const CollectionScreen = () => {
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
                <Appbar.Content title="Collections" style={subStyles.appBarTitleStyle} />
                <Appbar.Action icon="heart-outline" onPress={() => navigation.dispatch(StackActions.replace('FILTER'))} />
                <Appbar.Action icon="shopping-outline" onPress={() => navigation.dispatch(StackActions.replace('NOTIFICATION'))} />
            </Appbar.Header>
            <ScrollView>
                <View style={subStyles.subContainer}>
                    <Image source={require('../../assets/Images/eyeBanner.png')} style={subStyles.imageStyle} />
                </View>
                <View style={subStyles.imageContainer}>
                    <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('COLORED'))}>
                        <Image source={require('../../assets/Images/model1.png')} style={subStyles.smallImageStyle} />
                        <View style={subStyles.imageTextContainer}>
                            <Text style={subStyles.imageTextStyle}>Diamonds New Colors</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('COLORED'))}>
                        <Image source={require('../../assets/Images/model2.png')} style={subStyles.smallImageStyle} />
                        <View style={subStyles.imageTextContainer}>
                            <Text style={subStyles.imageTextStyle}>Elite</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={subStyles.imageContainer}>
                    <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('COLORED'))}>
                        <Image source={require('../../assets/Images/model3.png')} style={subStyles.smallImageStyle} />
                        <View style={subStyles.imageTextContainer}>
                            <Text style={subStyles.imageTextStyle}>1 Day Seceret</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={subStyles.buttonContainerNxt} onPress={() => navigation.dispatch(StackActions.replace('COLORED'))}>
                        <Image source={require('../../assets/Images/model4.png')} style={subStyles.smallImageStyle} />
                        <View style={subStyles.imageTextContainer}>
                            <Text style={subStyles.imageTextStyle}>Glow</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CollectionScreen;