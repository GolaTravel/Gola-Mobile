import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import sss from "../screens/LandingPage";
import LandingPage from "../screens/LandingPage";

const Stack = createNativeStackNavigator();

export default function Regnav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen options={{headerShown: false}} name="Signup" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}