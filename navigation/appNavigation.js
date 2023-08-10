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
import PlaceScreen from "../screens/PlaceScreen";
import HotelScreen from "../screens/CatagoryScreens/HotelScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={LandingPage} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignUpScreen} />
        </Stack.Navigator>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => menuIcons(route, focused),
                tabBarStyle: {
                    marginBottom: 20,
                    borderRadius: 50,
                    backgroundColor: themeColors.bgDark,
                    marginHorizontal: 20,
                },
                tabBarIconStyle: {
                    marginTop: 30,
                },
            })}
        >
            <Tab.Screen name="Home" options={{ headerShown: false }}  component={HomeScreen} />
            <Tab.Screen name="Cart"  options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="TodoList" options={{ headerShown: false }} component={HomeScreen} />
            <Tab.Screen name="Notifications" options={{ headerShown: false }} component={HomeScreen} />
            
            
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



function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Place" component={PlaceScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MainNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: themeColors.bg,
                    width: 250,

                },
                drawerActiveBackgroundColor: themeColors.tintBg,
                drawerActiveTintColor: themeColors.bgDark,
                drawerInactiveTintColor: themeColors.bgDark,
                drawerLabelStyle: { // Customize the font family and size
                    fontSize: 16,
                },

            }}

            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home"
                           options={{ headerShown: false,
                               drawerIcon: () => (
                                   <HomeIcon size={26} color={themeColors.bgDark}/>
                               )
                           }}

                           component={HomeTabs}
            />
            <Drawer.Screen name="Profile" options={{ headerShown: false,
                drawerIcon: () => (
                    <UserIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={ProfileScreen} />
            <Drawer.Screen name="To Do List" options={{ headerShown: false,
                drawerIcon: () => (
                    <SquaresPlusIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={ToDoListScreen} />
            <Drawer.Screen name="Wish List" options={{ headerShown: false,
                drawerIcon: () => (
                    <HeartOutline size={26} color={themeColors.bgDark}/>
                )
            }} component={WishList} />
            <Drawer.Screen name="Offline Maps" options={{ headerShown: false,
                drawerIcon: () => (
                    <MapIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={OfflineMapScreen} />
            <Drawer.Screen name="SOS Contacts"  options={{ headerShown: false,
                drawerIcon: () => (
                    <PhoneIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={SOSContactsScreen} />
            <Drawer.Screen name="Blog"  options={{ headerShown: false,
                drawerIcon: () => (
                    <BookOpenIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={BlogScreen} />
            <Drawer.Screen name="History " options={{ headerShown: false,
                drawerIcon: () => (
                    <ClockIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={HistoryScreen} />
            <Drawer.Screen name="Settings" options={{ headerShown: false,
                drawerIcon: () => (
                    <Cog6ToothIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={SettingsScreen} />
            <Drawer.Screen name="Contact Us"  options={{ headerShown: false,
                drawerIcon: () => (
                    <ChatBubbleLeftRightIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={ContactUsScreen} />
            <Drawer.Screen name="Log Out"  options={{ headerShown: false,
                drawerIcon: () => (
                    <ArrowLeftOnRectangleIcon size={26} color={themeColors.bgDark}/>
                )
            }} component={ContactUsScreen} />


        </Drawer.Navigator>
    );
}
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




export default AppNavigation;
