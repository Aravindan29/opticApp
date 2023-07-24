import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import subStyles from './login.styles';
import { loginStart, loginReset } from '../../redux/login/login.actions';
import { selectCurrentUserStatus } from '../../redux/login/login.selectors';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const userStatus = useSelector(selectCurrentUserStatus);

    console.log('userStatus', userStatus);
    
    const [loginCredentials, setLoginCredentials] = useState({
        userName: '',
        phoneNumber: '',
    });

    const {userName, phoneNumber} = loginCredentials;

    useEffect(() => {
        if (userStatus !== null) {
            dispatch(loginReset());
        }
    }, [userStatus]);

    const onLogin = () => {
        dispatch(loginStart(loginCredentials));
    };

    return (
        <SafeAreaView style={subStyles.mainContainer}>
            <View style={subStyles.subContainer}>
                <View>
                    <Text>User Name</Text>
                    <TextInput
                        multiline
                        style={subStyles.input}
                        placeholder="User Name"
                        value={userName}
                        onChangeText={(userName) => setLoginCredentials({...loginCredentials, userName})}
                    />
                </View>
                <View>
                    <Text>Mobile Number</Text>
                    <TextInput
                        style={subStyles.input}
                        placeholder="Mobile Number"
                        value={phoneNumber}
                        keyboardType="numeric"
                        onChangeText={(phoneNumber) => setLoginCredentials({...loginCredentials, phoneNumber})}
                    />
                </View>

                <TouchableOpacity style={subStyles.btnStyle} onPress={onLogin}>
                    <Text style={subStyles.btnTextStyle}>Login</Text>
                </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}
export default LoginScreen;