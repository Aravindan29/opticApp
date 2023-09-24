import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import ProfileScreen from '../screens/profile/profile.screen';
import { ProfileParamList } from '../appTypes';

const ProfileStack = createStackNavigator<ProfileParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function ProfileListNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="PROFILE" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <ProfileStack.Screen
        name="PROFILE"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}