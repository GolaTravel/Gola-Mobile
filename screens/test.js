import {View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import {BellIcon, MagnifyingGlassIcon,ArrowDownTrayIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline';
import {categories} from "../constants";
import {Colors} from "react-native/Libraries/NewAppScreen";

import { LinearGradient } from 'expo-linear-gradient'
import {storeColors} from '../theme';
import HotelCard from '../components/HotelCard'
import GradientButton from '../components/gradientButton'

const featured = [
    {
        id: 1,
        title: 'Temple Of Tooth Relic, Kandy',
        image: require('../assets/images/tooth.png'),
        downloads: 'Temple of tooth ...',
        stars: 4
    },
    {
        id: 2,
        title: 'Unawatuna Beach, Galle',
        image: require('../assets/images/unawwatuna.png'),
        downloads: 'Unawatuna Beach ...',
        stars: 4
    },
    {
        id: 3,
        title: 'Free Fire',
        image: require('../assets/images/freeFire.png'),
        downloads: '100M',
        stars: 3
    },

    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../assets/images/altosAdventure.png'),
        downloads: '20k',
        stars: 4
    },
]

export default function TestScreen() {
    return (
        // adding status bar to the top of the screen
        <View className="px-4 flex-row justify-between items-center">
            <StatusBar />
            <Image
                source={require('../assets/images/travel.jpg')}
                className="w-full h-4 absolute -top-5 opacity-30"
                style={{ height: 220 }}
            />
            <SafeAreaView className="flex-1">
                {/* avatar and bell icon */}
                <View className="flex-row justify-between items-center px-1 py-3">
                    <View className="w-16 h-16 rounded-full bg-white items-center justify-center ">
                        <Image
                            source={require('../assets/images/img_1.png')}
                            className="w-12 h-12 rounded-full shadow-2xl "
                        />
                    </View>
                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon size={25} color={themeColors.bgDark} />
                        <Text className="text-base font-semibold">Colombo, Sri Lanka</Text>
                    </View>
                    <BellIcon size={27} color="black" />
                </View>
                <View>
                    <Text className="text-3xl font-bold text-center mt-6 ">Welcome To Sri Lanka</Text>
                </View>
                {/* Search Bar */}
                <View className="mx-5 mt-6">
                    <View className={"flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]"}>
                        <TextInput placeholder={"Search"}
                                   className={"p-4 flex-1 font-semibold text-gray-700"}/>
                        <TouchableOpacity className={"rounded-full p-2"}
                                          style={{backgroundColor: themeColors.bgDark}}>
                            <MagnifyingGlassIcon size={25} strokeWidth={"2"} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*    Creating categories*/}
                <View className=" mt-6">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        className={"overflow-visible"}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity
                                    style={{backgroundColor: 'rgba(0,0,0,0.0)'}}
                                    className={" border-2 border-gray-400 px-5 p-3 pr-4 pl-4 items-center flex-row rounded-full mr-2 shadow"}
                                >
                                    <View className={"mr-2"}>
                                        {item.icon }
                                    </View>

                                    <Text className={" "} style={{color:"#428A68", fontSize:17}}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}></FlatList>
                </View>

                <View className="mt-3 space-y-4">
                    <Text
                        style={{color: storeColors.text}}
                        className="mt-4 ml-1 text-2xl font-bold ">
                        Top Hotels
                    </Text>
                    <View className="pl-1">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {

                                featured.map((item, index)=>{
                                    return (
                                        <HotelCard key={index} game={item} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    );
}
