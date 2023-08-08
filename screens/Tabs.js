import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import StarRating from 'react-native-star-rating';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HistoryScreen from "../screens/SideBarScreens/HistoryScreen";
import AboutTabContent from './TabContent/AboutTabContent';
import ReviewTabContent from "./TabContent/ReviewTabContent";
import PhotoTabContent from "./TabContent/PhotoTabContent";
import VideoTabContent from "./TabContent/VideoTabContent"; // Make sure the path is correct

const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-10';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();

    return (
        <View className="bg-white flex-1">

                {/* Tab Navigator */}
                <Tab.Navigator>
                    <Tab.Screen name="About" component={AboutTabContent} />
                    <Tab.Screen name="Review" component={ReviewTabContent} />
                    <Tab.Screen name="Photo" component={PhotoTabContent} />
                    <Tab.Screen name="Video" component={VideoTabContent} />
                </Tab.Navigator>
            </View>

    )
}
