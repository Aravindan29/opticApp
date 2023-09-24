import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import MenuScreen from '../screens/menu/menu.screen';
import { MenuParamList } from '../appTypes';

const MenuStack = createStackNavigator<MenuParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function MenuNavigation() {
  return (
    <MenuStack.Navigator initialRouteName="MENU" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <MenuStack.Screen
        name="MENU"
        options={{ headerShown: false }}
        component={MenuScreen}
      />
    </MenuStack.Navigator>
  );
}