import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import WishListScreen from '../screens/wishList/wishList.screen';
import { WishListParamList } from '../appTypes';

const WishStack = createStackNavigator<WishListParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function WishListNavigation() {
  return (
    <WishStack.Navigator initialRouteName="WISHLIST" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <WishStack.Screen
        name="WISHLIST"
        options={{ headerShown: false }}
        component={WishListScreen}
      />
    </WishStack.Navigator>
  );
}