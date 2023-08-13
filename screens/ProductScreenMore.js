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
import Tabs from "./Tabs";
import {BottomNavigation} from "react-native-paper"; // Make sure the path is correct
import MyTabs from "../navigation/appNavigation"

const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-10';

const Tab = createMaterialTopTabNavigator();

export default function ProductScreenMore() {
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();

    return (
        <View className="bg-white flex-1">

            <Image source={require('../assets/images/tooth.png')} style={{ width: wp(100), height: hp(55) }} />
            <StatusBar style={'light'} />

            <SafeAreaView className={"flex-row justify-between items-center w-full absolute " + topMargin}>
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    className="p-2 rounded-full ml-4"
                    style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                >
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> toggleFavourite(!isFavourite)}
                    className="p-2 rounded-full mr-4"
                    style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                >
                    <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite? "red": "white"} />
                </TouchableOpacity>
            </SafeAreaView>


            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="px-5 flex flex-1 justify-between bg-white pt-7 -mt-32">
                <View className="space-y-5">

                    <View className="flex-row justify-between items-start">
                        <Text style={{ fontSize: wp(6) }} className="font-bold flex-1 text-neutral-700">
                            Temple Of The Tooth
                        </Text>
                        <Text style={{ fontSize: wp(7), color: themeColors.bgDark }} className="font-semibold">
                            100$
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-2 ">
                        <MapPinIcon size={25} color={themeColors.bgDark} />
                        <Text className="text-base font-semibold pr-40">Kandy</Text>

                        <Text className="pr-2 text-base font-semibold" > 4.0</Text>
                        <StarRating
                            disabled={true}
                            starSize={20}
                            containerStyle={{ width: 90 }}
                            maxStars={5}
                            rating={5}
                            emptyStar={require('../assets/images/emptyStar.png')}
                            fullStar={require('../assets/images/fullStar.png')}
                        />
                    </View>
                </View>
                {/*ImPorting tabs To Place Screen*/}

                <Tabs />


            </View>
            <View className={"mt-7"}>

            </View >

            <TouchableOpacity style={{ backgroundColor: themeColors.bgDark, height: 50, width: 300  }} className="mb-12 mx-auto flex justify-center items-center rounded-full">
                <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>Add To My Plan</Text>
            </TouchableOpacity>

        </View>
    );
}
