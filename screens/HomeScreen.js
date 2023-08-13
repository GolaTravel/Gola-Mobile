import 'react-native-gesture-handler';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors, storeColors } from '../theme';
import {BellIcon, MagnifyingGlassIcon,ArrowDownTrayIcon, Bars3CenterLeftIcon} from 'react-native-heroicons/outline';
import {categories} from "../constants";
import HotelCard from '../components/HotelCard'
import GradientButton from '../components/gradientButton'
import SideBar from '../navigation/appNavigation'
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from "firebase/compat";
import ProductCard from "../components/HotelCard";


const featured = [
    {
        id: 1,
        title: 'Temple Of Tooth Relic, Kandy',
        image: require('../assets/images/tooth.png'),
        downloads: '',
        stars: 4
    },
    {
        id: 2,
        title: 'Unawatuna Beach, Galle',
        image: require('../assets/images/unawwatuna.png'),
        downloads: 'Unawatuna Beach ...',
        stars: 4
    },

]



export default function TestScreen() {
    const navigation = useNavigation();

    const handleOpenDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <ScrollView>
            <View className="px-4 flex-row justify-between items-center">
                <StatusBar />
                <Image
                    source={require('../assets/images/travel.jpg')}
                    className="absolute -top-5 opacity-30"
                    style={{ height: 230, width: 450 }}
                />
                <SafeAreaView className="flex-1">
                    {/* avatar and bell icon */}
                    <View className="flex-row justify-between items-center px-1 py-3">
                        <TouchableOpacity onPress={handleOpenDrawer}>
                            <Bars3CenterLeftIcon size={40} color="black" />
                        </TouchableOpacity>

                        <View className="flex-row items-center space-x-2">
                            <MapPinIcon size={25} color={themeColors.bgDark} />
                            <Text className="text-base font-semibold">Colombo, Sri Lanka</Text>
                        </View>

                        <TouchableOpacity>
                            <View className="w-16 h-16 rounded-full bg-white items-center justify-center ">
                                <Image
                                    source={require('../assets/images/img_1.png')}
                                    className="w-12 h-12 rounded-full shadow-2xl "
                                /></View>
                        </TouchableOpacity>

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
                                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}
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
                                            <ProductCard key={index} game={item} />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>

                </SafeAreaView>
            </View>
        </ScrollView>
    );
}