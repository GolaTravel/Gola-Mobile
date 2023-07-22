import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from "../theme";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeftIcon} from "react-native-heroicons/solid"
import {useNavigation} from "@react-navigation/native";
import "../config";
import firebase from "firebase/compat/app"; // Import the auth
export default function LoginScreen() {
    const navigation=useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let loginuser = async (email, password) =>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
        }catch (error){
            alert(error.message);
        }
    }
    return (
        <View className="flex-1" style={{backgroundColor:themeColors.bg}}>
            <View className={"flex-row justify-center "}>
                <Image  source={require('../assets/images/loss.jpeg')} style={{marginTop:-30,width:500, height:400}}/>
            </View>

            <View className={"flex-1 bg-white px-8 pt-3"}
                  style={{borderTopLeftRadius: 50, borderTopRightRadius:50}}>
                <View className={"form space-y-2"}>
                    <Text className={"text-2xl font-bold text-center mt-7"}>Welcome Back </Text>
                    <Text className={"text-lg font-bold text-center mb-2"}>Login To Your Account </Text>

                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               placeholder={"Enter Your Email Address"}
                               onChangeText={(email)=> setEmail(email)}
                               autoCapitalize={"none"}
                    >
                    </TextInput>

                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               secureTextEntry
                               onChangeText={(password)=> setPassword(password)}
                               autoCapitalize={"none"}
                               placeholder={"Enter Your Password"}>
                    </TextInput>
                    <TouchableOpacity className={"flex items-end mb-5"}>
                        <Text className={"text-gray-700"}>
                            Fogot Password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={"py-3 bg-green-600 rounded-xl"}
                    onPress={()=> loginuser(email, password)}>
                        <Text className={"font-xl font-bold text-center text-white"}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text className={"text-xl text-gray-700 font-bold text-center py-5"}>Or</Text>
                <View className={"flex-row justify-center space-x-12"}>
                    <TouchableOpacity className={"p-2 bg-gray-100 rounded-2xl"}>
                        <Image source={require("../assets/icons/google.png")} className={"w-10 h-10"}/>
                    </TouchableOpacity>
                    <TouchableOpacity className={"p-2 bg-gray-100 rounded-2xl"}>
                        <Image source={require("../assets/icons/apple.png")} className={"w-10 h-10"}/>
                    </TouchableOpacity>
                    <TouchableOpacity className={"p-2 bg-gray-100 rounded-2xl"}>
                        <Image source={require("../assets/icons/facebook.png")} className={"w-10 h-10"}/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold">Don't Have An Account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                        <Text className="font-semibold text-green-600">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}