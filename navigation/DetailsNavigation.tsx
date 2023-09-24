import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import DetailsScreen from '../screens/details/details.screen';
import { DetailsParamList } from '../appTypes';

const DetailsStack = createStackNavigator<DetailsParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function DetailsNavigation() {
  return (
    <DetailsStack.Navigator initialRouteName="DETAILS" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <DetailsStack.Screen
        name="DETAILS"
        options={{ headerShown: false }}
        component={DetailsScreen}
      />
    </DetailsStack.Navigator>
  );
}