import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import NotificationScreen from '../screens/notification/notification.screen';
import { NotificationParamList } from '../appTypes';

const NotificationStack = createStackNavigator<NotificationParamList>();

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
};

export default function NotificationNavigation() {
  return (
    <NotificationStack.Navigator initialRouteName="NOTIFICATION" screenOptions={{ gestureEnabled: true, headerShown: false, ...horizontalAnimation }}>
      <NotificationStack.Screen
        name="NOTIFICATION"
        options={{ headerShown: false }}
        component={NotificationScreen}
      />
    </NotificationStack.Navigator>
  );
}