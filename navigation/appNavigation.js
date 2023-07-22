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

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false}} name="Home" component={LandingPage} />
                <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="Signup" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function Todashboard() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


