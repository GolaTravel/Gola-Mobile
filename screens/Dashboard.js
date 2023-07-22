import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import {themeColors} from "../theme";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeftIcon} from "react-native-heroicons/solid"
import {useNavigation} from "@react-navigation/native";
import "../config";
import firebase from "firebase/compat/app"; // Import the auth

export default function Dashboard() {
    const [name, setName] = useState('')

    useEffect(()=> {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) =>{
                if(snapshot.exists){
                    setName(snapshot.data())
                }
                else{
                    console.log('User Does Not Exist')
                }
            })
    }, [])
    return (
        <View className="flex-1" style={{backgroundColor:themeColors.bg}}>
            <View className={"flex-row justify-center "}>
                <Image  source={require('../assets/images/loss.jpeg')} style={{marginTop:-30,width:500, height:400}}/>
            </View>

            <View className={"flex-1 bg-white px-8 pt-3"}
                  style={{borderTopLeftRadius: 50, borderTopRightRadius:50}}>
                <View className={"form space-y-2"}>
                    <Text className={"text-2xl font-bold text-center mt-7"}>Welcome {name.firstname}</Text>

                    <TouchableOpacity className={"py-3 bg-green-600 rounded-xl"}
                                      onPress={()=> {firebase.auth().signOut()}}>
                        <Text className={"font-xl font-bold text-center text-white"}>Log Out </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}