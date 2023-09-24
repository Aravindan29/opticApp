import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import ColoredScreen from '../screens/colored/colored.screen';
import { ColoredParamList } from '../appTypes';

const ColoredStack = createStackNavigator<ColoredParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function ColoredNavigation() {
  return (
    <ColoredStack.Navigator initialRouteName="COLORED" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <ColoredStack.Screen
        name="COLORED"
        options={{ headerShown: false }}
        component={ColoredScreen}
      />
    </ColoredStack.Navigator>
  );
}