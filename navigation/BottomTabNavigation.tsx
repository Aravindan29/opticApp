import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginNavigation from './LoginNavigation';
import { BottomParamList } from '../appTypes';

const BottomTab = createBottomTabNavigator<BottomParamList>();

export default function BottomTabNavigation() {
    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 14,
                },
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderTopColor: 'lightgray',
                },
            }}
        >
            <BottomTab.Screen
                name="HOME"
                component={LoginNavigation}
            />
            <BottomTab.Screen
                name="CART"
                component={LoginNavigation}
            />
            <BottomTab.Screen
                name="PROFILE"
                component={LoginNavigation}
            />
        </BottomTab.Navigator>
    )
}