import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from '../screens/login/login.screen';
import { LoginParamList } from '../appTypes';

const LoginStack = createStackNavigator<LoginParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function LoginNavigation() {
  return (
    <LoginStack.Navigator initialRouteName="LOGIN" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <LoginStack.Screen
        name="LOGIN"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
    </LoginStack.Navigator>
  );
}