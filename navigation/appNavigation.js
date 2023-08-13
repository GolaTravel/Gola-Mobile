import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, View, Text} from 'react-native';
import {
    HomeIcon as HomeOutline,
    HeartIcon as HeartOutline,
    ShoppingBagIcon as BagOutline,
    ClockIcon,
    SquaresPlusIcon,
    HomeIcon,
    Cog6ToothIcon,
    MapIcon,
    PhoneIcon,
    ChatBubbleLeftRightIcon,
    BookOpenIcon,
    UserIcon, ArrowLeftOnRectangleIcon
} from 'react-native-heroicons/outline';
import {
    HomeIcon as HomeSolid,
    HeartIcon as HeartSolid,
    ShoppingBagIcon as BagSolid,
} from 'react-native-heroicons/solid';
import { themeColors } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LandingPage from '../screens/LandingPage';
import Dashboard from '../screens/Dashboard';
import {SafeAreaView} from "react-native-safe-area-context";
import ToDoListScreen from "../screens/SideBarScreens/ToDoListScreen";
import OfflineMapScreen from "../screens/SideBarScreens/OfflineMapScreen";
import BlogScreen from "../screens/SideBarScreens/BlogScreen";
import SOSContactsScreen from "../screens/SideBarScreens/SOSContactsScreen";
import HistoryScreen from "../screens/SideBarScreens/HistoryScreen";
import SettingsScreen from "../screens/SideBarScreens/SettingsScreen";
import ContactUsScreen from "../screens/SideBarScreens/ContactUsScreen";
import WishList from "../screens/SideBarScreens/WishList";
import ProfileScreen from "../screens/SideBarScreens/ProfileScreen";
import PlaceScreen from "../screens/CatagoryScreens/PlaceScreen";
import HotelScreen from "../screens/CatagoryScreens/HotelScreen";
import {createStackNavigator} from "@react-navigation/stack";
import FoodCardMoreCard from "../components/FoodCardMore";
import FoodScreen from "../screens/CatagoryScreens/FoodScreen";
import ProductScreenMore from "../screens/ProductScreenMore";
import ExperienceScreen from "../screens/CatagoryScreens/ExperienceScreen";
import TravelModeScreen from "../screens/CatagoryScreens/TravelModeScreen";



// Create a stack navigator for authentication screens
const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" options={{ headerShown: false}} component={LandingPage} />
        <AuthStack.Screen name="Login" options={{ headerShown: false}} component={LoginScreen} />
        <AuthStack.Screen name="Signup" options={{ headerShown: false}} component={SignUpScreen} />
    </AuthStack.Navigator>
);



// Create a drawer navigator for screens that should only have the drawer
const Drawer = createDrawerNavigator();
const AppDrawerNavigator = () => (
    <Drawer.Navigator
        screenOptions={{drawerStyle: {backgroundColor: themeColors.bg, width: 250,},
            drawerActiveBackgroundColor: themeColors.tintBg, drawerActiveTintColor: themeColors.bgDark,
            drawerInactiveTintColor: themeColors.bgDark, drawerLabelStyle: { fontSize: 16,},}}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>

        <Drawer.Screen name="Home" options={{ headerShown: false, drawerIcon: () => (<HomeIcon size={26} color={themeColors.bgDark}/>)}} component={MyTabs}/>
        <Drawer.Screen name="Profile" options={{ headerShown: false, drawerIcon: () => (<UserIcon size={26} color={themeColors.bgDark}/>)}} component={ProfileScreen} />
        <Drawer.Screen name="To Do List" options={{ headerShown: false, drawerIcon: () => (<SquaresPlusIcon size={26} color={themeColors.bgDark}/>)}} component={ToDoListScreen} />
        <Drawer.Screen name="Wish List" options={{ headerShown: false, drawerIcon: () => (<HeartOutline size={26} color={themeColors.bgDark}/>)}} component={WishList} />
        <Drawer.Screen name="Offline Maps" options={{ headerShown: false, drawerIcon: () => (<MapIcon size={26} color={themeColors.bgDark}/>)}} component={OfflineMapScreen} />
        <Drawer.Screen name="SOS Contacts"  options={{ headerShown: false, drawerIcon: () => (<PhoneIcon size={26} color={themeColors.bgDark}/>)}} component={SOSContactsScreen} />
        <Drawer.Screen name="Blog"  options={{ headerShown: false, drawerIcon: () => (<BookOpenIcon size={26} color={themeColors.bgDark}/>)}} component={BlogScreen} />
        <Drawer.Screen name="History " options={{ headerShown: false, drawerIcon: () => (<ClockIcon size={26} color={themeColors.bgDark}/>)}} component={HistoryScreen} />
        <Drawer.Screen name="Settings" options={{ headerShown: false, drawerIcon: () => (<Cog6ToothIcon size={26} color={themeColors.bgDark}/>)}} component={SettingsScreen} />
        <Drawer.Screen name="Contact Us"  options={{ headerShown: false, drawerIcon: () => (<ChatBubbleLeftRightIcon size={26} color={themeColors.bgDark}/>)}} component={ContactUsScreen} />
        <Drawer.Screen name="Log Out"  options={{ headerShown: false, drawerIcon: () => (<ArrowLeftOnRectangleIcon size={26} color={themeColors.bgDark}/>)}} component={ContactUsScreen} />

    </Drawer.Navigator>
);


const CustomDrawerContent = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <View style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#f4f4f4',
                borderBottomWidth: 1,
                marginBottom: 20
            }}>
                <Image
                    source={require('../assets/images/img_1.png')}
                    style={{ height: 130, width: 130, borderRadius: 65}}

                />
                <Text style={{
                    fontSize: 25,
                    paddingTop: 10,
                    marginVertical: 6,
                    fontWeight: 'bold',
                    color: '#111'
                }}>Pabodhi Herath</Text>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>


    );

};


// Create a bottom tab navigator and integrate it with the drawer navigator
const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({tabBarShowLabel: false, tabBarIcon: ({ focused }) => menuIcons(route, focused),
            tabBarStyle: {marginBottom: 20, borderRadius: 50, backgroundColor: themeColors.bgDark, marginHorizontal: 20,},
            tabBarIconStyle: {marginTop: 30,},})}>
            <Tab.Screen name="Home" options={{ headerShown: false }}  component={HomeScreen} />
            <Tab.Screen name="Cart"  options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="TodoList" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="Notifications" options={{ headerShown: false }} component={HomeScreen} />

        </Tab.Navigator>
    );
};

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



// Create a separate navigator for the Hotel screen



// Combine the drawer and bottom tab navigators
const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MyTabs} />

        </Drawer.Navigator>
    );
};




// Create the main App navigator which  the above created navigators
const RootStack = createStackNavigator();
const RootStackScreen = () => (
    <RootStack.Navigator initialRouteName="Auth" headerMode='none'>
        <RootStack.Screen name="Auth" component={AuthStackNavigator}/>
        <RootStack.Screen name="App" component={AppDrawerNavigator}/>
        <RootStack.Screen name="Both" component={MyDrawer}/>
        <RootStack.Screen name="Product" component={ProductScreenMore}/>
        <RootStack.Screen name="Hotel" component={HotelScreen}/>
        <RootStack.Screen name="Food" component={FoodScreen}/>
        <RootStack.Screen name="Place" component={PlaceScreen}/>
        <RootStack.Screen name="Experience" component={ExperienceScreen}/>
        <RootStack.Screen name="TravelMode" component={TravelModeScreen}/>
    </RootStack.Navigator>
);



// Main App component
export default function App() {
    return (
        // Wrap the RootStackScreen within NavigationContainer
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
};
