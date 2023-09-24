import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import FilterScreen from '../screens/filter/filter.screen';
import { FilterParamList } from '../appTypes';

const FilterStack = createStackNavigator<FilterParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function FilterNavigation() {
  return (
    <FilterStack.Navigator initialRouteName="FILTER" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <FilterStack.Screen
        name="FILTER"
        options={{ headerShown: false }}
        component={FilterScreen}
      />
    </FilterStack.Navigator>
  );
}