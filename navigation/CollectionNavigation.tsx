import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import CollectionScreen from '../screens/collections/collections.screen';
import { CollectionParamList } from '../appTypes';

const CollectionStack = createStackNavigator<CollectionParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function CollectionNavigation() {
  return (
    <CollectionStack.Navigator initialRouteName="COLLECTION" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <CollectionStack.Screen
        name="COLLECTION"
        options={{ headerShown: false }}
        component={CollectionScreen}
      />
    </CollectionStack.Navigator>
  );
}