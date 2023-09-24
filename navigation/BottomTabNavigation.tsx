import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuNavigation from './MenuNavigation';
import HomeNavigation from './HomeNavigation';
import WishListNavigation from './WishListNavigation';
import ShopBagNavigation from './ShopBagNavigation';
import ProfileListNavigation from './ProfileNavigation';
import { BottomParamList } from '../appTypes';
import { Ionicons, Feather } from '@expo/vector-icons';
import Code from '../constants/ColorCode';

const BottomTab = createBottomTabNavigator<BottomParamList>();

export default function BottomTabNavigation() {
    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false, 
                tabBarActiveTintColor: Code.black,
                tabBarInactiveTintColor: Code.gray,
                tabBarActiveBackgroundColor: Code.violet_light,
                tabBarItemStyle:{
                    margin:3,
                    borderRadius:20,
                },
                tabBarStyle: {
                    backgroundColor: Code.violet_light_G,
                },
                unmountOnBlur: true,
            }}
            initialRouteName="HOME"
        >
            <BottomTab.Screen
                name="MENU"
                component={MenuNavigation}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="WISHLIST"
                component={WishListNavigation}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <TabBarIcon name="heart-outline" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="HOME"
                component={HomeNavigation}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
                }}
            />
             <BottomTab.Screen
                name="CART"
                component={ShopBagNavigation}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <Feather name='shopping-bag' size={27} color={color} />,
                }}
            />
             <BottomTab.Screen
                name="PROFILE"
                component={ProfileListNavigation}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string}) {
    return <Ionicons size={27} style={{marginBottom: -3}} {...props} />;
}