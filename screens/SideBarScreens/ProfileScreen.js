import 'react-native-gesture-handler';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CameraIcon, MapPinIcon} from 'react-native-heroicons/solid';
import { themeColors, storeColors } from '../../theme';
import * as ImagePicker from 'expo-image-picker';
import {
    BellIcon,
    MagnifyingGlassIcon,
    ArrowDownTrayIcon,
    Bars3CenterLeftIcon,
    PencilSquareIcon
} from 'react-native-heroicons/outline';
import {categories} from "../../constants";
import HotelCard from '../../components/HotelCard'
import GradientButton from '../../components/gradientButton'
import SideBar from '../../navigation/appNavigation'
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from "firebase/compat";
import {imagesDataURL} from "../../constants/data";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";





export default function ProfileScreen() {
    const navigation = useNavigation();

    const handleOpenDrawer = () => {
        navigation.openDrawer();
    };

    const [name, setName] = useState("Pabodhi Herath");
    const [email, setEmail] = useState("avishkainduwaran@gmail.com");
    const [phone, setPhone] = useState("077 123 4567");
    const [address, setAddress] = useState("No. 123, Galle Road, Colombo 03");
    const [country, setCountry] = useState("Sri Lanka");

    const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
    const handleImageSelection = async () =>{
        let result= await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1


        });
        console.log(result);
        if(!(await result).canceled){
            setSelectedImage((await result).assets[0].uri);
        }
    }
    return (
        <ScrollView className={"bg-white"}>
            <View className=" flex-row justify-between items-center">
                <StatusBar />
                <Image
                    source={require('../../assets/images/travel.jpg')}
                    className="absolute -top-5 opacity-40"
                    style={{ height: 230, width: 450 }}
                />
            <View className="px-4 flex-row justify-between items-center">
                <StatusBar />

                <SafeAreaView className="flex-1">
                    {/* avatar and bell icon */}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10 }}>
                            <TouchableOpacity onPress={handleOpenDrawer}>
                                <Bars3CenterLeftIcon size={40} color="black" />
                            </TouchableOpacity>

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>User Profile     </Text>
                            </View>

                        </View>
                    </View>


                    <View className="mx-5 ">
                        <View style={{alignItems: "center", marginVertical:6}}>
                            <TouchableOpacity onPress={handleImageSelection}>
                                    <Image source={{uri: selectedImage}}
                                    style={{height:170,width:170, borderRadius:85,borderWidth:2, borderColor:themeColors.bgDark}}/>
                                <View style={{position:"absolute", bottom:0, right:10, zIndex:9999}}>
                                    <CameraIcon size={32} color={themeColors.bgDark}/>

                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text className={"text-lg font-semibold mb-2"}>Full Name</Text>
                        <View style={{height:46, width:356}} className={"flex-row justify-center items-center rounded-full  bg-[#e6e6e6]"}>
                            <TextInput value={name}
                                       onChangeText={value => setName(value)}
                                       editable={true}
                                       className={"p-4 flex-1 font-semibold text-gray-700"}/>
                            <TouchableOpacity className={"mr-2"}>

                                <PencilSquareIcon size={25} strokeWidth={"2"} color={themeColors.bgDark} />
                            </TouchableOpacity>
                        </View>

                        <Text className={"text-lg font-semibold mb-2 mt-4"}>Email</Text>
                        <View style={{height:46, width:356}} className={"flex-row justify-center items-center rounded-full  bg-[#e6e6e6]"}>
                            <TextInput value={email}
                                       onChangeText={value => setEmail(value)}
                                       editable={false}
                                       className={"p-4 flex-1 font-semibold text-gray-700"}/>
                            <TouchableOpacity className={"mr-2"}>

                                <PencilSquareIcon size={25} strokeWidth={"2"} color={themeColors.bgDark} />
                            </TouchableOpacity>
                        </View>

                        <Text className={"text-lg font-semibold mb-2 mt-4"}>Phone Number</Text>
                        <View style={{height:46, width:356}} className={"flex-row justify-center items-center rounded-full  bg-[#e6e6e6]"}>
                            <TextInput value={phone}
                                       onChangeText={value => setPhone(value)}
                                       editable={true}
                                       className={"p-4 flex-1 font-semibold text-gray-700"}/>
                            <TouchableOpacity className={"mr-2"}>

                                <PencilSquareIcon size={25} strokeWidth={"2"} color={themeColors.bgDark} />
                            </TouchableOpacity>
                        </View>

                        <Text className={"text-lg font-semibold mb-2 mt-4"}>Address</Text>
                        <View style={{height:46, width:356}} className={"flex-row justify-center items-center rounded-full  bg-[#e6e6e6]"}>
                            <TextInput value={address}
                                       onChangeText={value => setAddress(value)}
                                       editable={true}
                                       className={"p-4 flex-1 font-semibold text-gray-700"}/>
                            <TouchableOpacity className={"mr-2"}>

                                <PencilSquareIcon size={25} strokeWidth={"2"} color={themeColors.bgDark} />
                            </TouchableOpacity>
                        </View>
                        <Text className={"text-lg font-semibold mb-2 mt-4"}>Country</Text>
                        <View style={{height:46, width:356}} className={"flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]"}>
                            <TextInput value={country}
                                       onChangeText={value => setCountry(value)}
                                       editable={true}
                                       className={"p-4 flex-1 font-semibold text-gray-700"}/>
                            <TouchableOpacity className={"mr-2"}>

                                <PencilSquareIcon size={25} strokeWidth={"2"} color={themeColors.bgDark} />
                            </TouchableOpacity>
                        </View>


                    </View>
                    <TouchableOpacity style={{ backgroundColor: themeColors.bgDark, height: 50, width: 225  }} className="mt-10 mx-auto flex justify-center items-center rounded-full">
                        <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>Save Changes</Text>
                    </TouchableOpacity>
                    {/*    Creating categories*/}


                </SafeAreaView>
            </View>
            </View>
        </ScrollView>
    );
}