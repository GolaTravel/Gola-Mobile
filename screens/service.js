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
import Tabs from "./Tabs";

const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-10';

const Tab = createMaterialTopTabNavigator();

export default function ProductScreenMore() {
    const [isFavourite, toggleFavourite] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Image source={require('../assets/images/tooth.png')} style={{ width: wp('100%'), height: hp('55%') }} />
            <StatusBar style="light" />

            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', position: 'absolute', ...topMargin }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ padding: wp(2), borderRadius: wp(7), marginLeft: wp(4), backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFavourite(!isFavourite)}
                    style={{ padding: wp(2), borderRadius: wp(7), marginRight: wp(4), backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, flex: 1, padding: wp(5), backgroundColor: 'white', marginTop: -hp('32%') }}>
                <View style={{ marginVertical: wp(7) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: wp(6), fontWeight: 'bold', color: 'black' }}>Temple Of The Tooth</Text>
                        <Text style={{ fontSize: wp(7), color: themeColors.bgDark, fontWeight: 'bold' }}>100$</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: wp(3) }}>
                        <MapPinIcon size={25} color={themeColors.bgDark} />
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', paddingRight: wp(40) }}>Kandy</Text>
                        <Text style={{ fontSize: wp(4), fontWeight: 'bold', paddingRight: wp(2) }}>4.0</Text>
                        <StarRating
                            disabled={true}
                            starSize={20}
                            containerStyle={{ width: wp(90) }}
                            maxStars={5}
                            rating={5}
                            emptyStar={require('../assets/images/emptyStar.png')}
                            fullStar={require('../assets/images/fullStar.png')}
                        />
                    </View>
                </View>
                {/* Importing tabs to the ProductScreen */}
                <Tabs />
            </View>

            <TouchableOpacity style={{ backgroundColor: themeColors.bgDark, height: wp(15), width: wp(80), justifyContent: 'center', alignItems: 'center', borderRadius: wp(15) / 2, alignSelf: 'center' }} >
                <Text style={{ fontSize: wp(5.5), color: 'white', fontWeight: 'bold' }}>Add To My Plan</Text>
            </TouchableOpacity>
        </View>
    );
}
