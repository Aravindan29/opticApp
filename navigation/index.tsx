import React from 'react';

import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinkingConfig from './LinkingConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroNavigation from './IntroNavigation';
import BottomTabNavigation from './BottomTabNavigation';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return(
        <NavigationContainer linking={LinkingConfig}>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="APPINTRO" component={IntroNavigation} />
        <Stack.Screen name="APPINITAL" component={BottomTabNavigation} />
      </Stack.Navigator>
  );
};
