import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import sss from "../screens/LandingPage";
import LandingPage from "../screens/LandingPage";
import Dashboard from "../screens/Dashboard";

import landingPage from "../screens/LandingPage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';
import { themeColors } from "../theme";
import { View } from "react-native";
import { tailwind } from 'tailwind-rn';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="abc">
                <Stack.Screen options={{ headerShown: false }} name="abc" component={HomeTabs} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Todashboard() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
                tabBarStyle: {
                    marginBottom: 20,
                    borderRadius: 50,
                    backgroundColor: themeColors.bgDark,
                    marginHorizontal: 20,
                },
                tabBarIconStyle: {
                    marginTop: 30,
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
             <Tab.Screen name="Cart" component={HomeScreen} />
            <Tab.Screen name="TodoList" component={HomeScreen} />
            <Tab.Screen name="Notifications" component={HomeScreen} />
        </Tab.Navigator>
    );
}



const menuIcons = (route, focused) => {
    let icon;
    if (route.name === 'Home') {
        icon = focused ? <HomeSolid size={30} color={themeColors.btncolor} /> : <HomeOutline size={30} strokeWidth={2} color="white" />;
    } else if (route.name === 'Cart') {
        icon = focused ? <BagSolid size={30} color={themeColors.btncolor} /> : <BagOutline size={30} strokeWidth={2} color="white" />;
    } else if (route.name === 'TodoList') {
        icon = focused ? <HeartSolid size={30} color={themeColors.btncolor} /> : <HeartOutline size={30} strokeWidth={2} color="white" />;
    } else if (route.name === 'Notifications') {
        icon = focused ? <BagSolid size={30} color={themeColors.btncolor} /> : <BagOutline size={30} strokeWidth={2} color="white" />;
    }

    const buttonStyle = focused ? { backgroundColor: 'white' } : {};

    return (
        <View style={{ width: 58, height: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 30, padding: 12, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, ...buttonStyle }}>
            {icon}
        </View>
    );
};



