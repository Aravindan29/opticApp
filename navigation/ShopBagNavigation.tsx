import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import ShopBagScreen from '../screens/shoppingBag/shoppingBag.screen';
import { ShopBagParamList } from '../appTypes';

const ShopBagStack = createStackNavigator<ShopBagParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function ShopBagNavigation() {
  return (
    <ShopBagStack.Navigator initialRouteName="SHOPBAG" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <ShopBagStack.Screen
        name="SHOPBAG"
        options={{ headerShown: false }}
        component={ShopBagScreen}
      />
    </ShopBagStack.Navigator>
  );
}