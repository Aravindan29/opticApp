import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import DynamicAdScreen from '../screens/dynamicAd/dynamicAd.screen';
import { DynamicAdParamList } from '../appTypes';

const DynamicAdInitialStack = createStackNavigator<DynamicAdParamList>();

const transitionConfig = {
  // Define the animation configuration for screen transitions
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  // Define the animation configuration for shared element transitions (if needed)
  sharedElements: (route, otherRoute, showing) => {
    const { params } = route;
    return params?.sharedElementIds || [];
  },
  // Define the custom animation for screen transitions
  screenInterpolator: ({ layout, position, scene }) => {
    const { index } = scene;

    // Set the opacity animation based on the screen position
    const opacity = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [0, 1],
    });

    // Set the translation animation based on the screen position
    const translateX = 0;
    const translateY = position.interpolate({
      inputRange: [index - 1, index],
      outputRange: [layout.initHeight, 0],
    });

    return { opacity, transform: [{ translateX }, { translateY }] };
  },
};

export default function DynamicAdNavigation() {
  return (
    <DynamicAdInitialStack.Navigator initialRouteName="DYNAMICAD" screenOptions={{ gestureEnabled: true, headerShown: false, ...transitionConfig }}>
      <DynamicAdInitialStack.Screen
        name="DYNAMICAD"
        options={{ headerShown: false }}
        component={DynamicAdScreen}
      />
    </DynamicAdInitialStack.Navigator>
  );
}