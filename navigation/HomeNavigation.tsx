import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import HomeScreen from '../screens/home/home.screen';
import { HomeParamList } from '../appTypes';

const HomeStack = createStackNavigator<HomeParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function HomeNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="DASHBOARD" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <HomeStack.Screen
        name="DASHBOARD"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
}