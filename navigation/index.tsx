import React from 'react';

import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinkingConfig from './LinkingConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroNavigation from './IntroNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import HomeNavigation from './HomeNavigation';
import FilterNavigation from './FilterNavigation';
import NotificationNavigation from './NotificationNavigation';
import CollectionNavigation from './CollectionNavigation';
import ColoredNavigation from './ColoredNavigation';
import DetailsNavigation from './DetailsNavigation';
import ShopBagNavigation from './ShopBagNavigation';


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
        <Stack.Screen name="APPHOME" component={HomeNavigation} />
        <Stack.Screen name="FILTER" component={FilterNavigation} />
        <Stack.Screen name="NOTIFICATION" component={NotificationNavigation} />
        <Stack.Screen name="COLLECTION" component={CollectionNavigation} />
        <Stack.Screen name="COLORED" component={ColoredNavigation} />
        <Stack.Screen name="DETAILS" component={DetailsNavigation} />
        <Stack.Screen name="SHOPBAG" component={ShopBagNavigation} />
      </Stack.Navigator>
  );
};
