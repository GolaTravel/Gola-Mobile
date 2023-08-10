import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from "../theme";
import {SafeAreaView} from "react-native-safe-area-context";
import {ArrowLeftIcon} from "react-native-heroicons/solid"
import {useNavigation} from "@react-navigation/native";
import "../config";
import Axios from "axios";
import firebase from "firebase/compat/app"; // Import the auth
export default function SignUpScreen() {
    const navigation=useNavigation();
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')

    //onclick user enterd
    const createUser = ()=>{
        //axios to Create an API That connects to the server
        Axios.post('http://localhost:3002/register', {
            //create veritable to send to the server throug the router
            Email: email,
            Firstname: firstname,
            Lastname: lastname,
            Password: password,
        }).then(()=>{
            console.log("User Has Been Created")
        })

    }

    // let reguser = async (email, firstname, lastname, password,) => {
    //     await firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(()=>{
    //             firebase.auth().currentUser.sendEmailVerification({
    //                 handleCodeInApp: true,
    //                 url: 'https://gola-5bb7c.firebaseapp.com',
    //
    //             })
    //                 .then(()=> {
    //                     alert('Verification Email Sent. Check Your Spam Folder Too ')
    //                 }).catch((error)=>{
    //                     alert(error.message)
    //             })
    //                 .then(()=> {
    //                     firebase.firestore().collection('users')
    //                         .doc(firebase.auth().currentUser.uid)
    //                         .set({
    //                             firstname,
    //                             lastname,
    //                             email,
    //                         })
    //                 })
    //                 .catch((error)=>{
    //                     alert(error.message)
    //                 })
    //         })
    //         .catch((error)=>{
    //             alert(error.message)
    //         })
    //
    // }

    return (
        <View className="flex-1" style={{backgroundColor:themeColors.bg}}>
            <View className={"flex-row justify-center "}>
                <Image  source={require('../assets/images/loss1.jpeg')} style={{width:500, height:250}}/>
            </View>
            <View className={"flex-1 bg-white px-8 pt-3"}
                  style={{borderTopLeftRadius: 50, borderTopRightRadius:50}}>
                <View className={"form space-y-2"}>
                    <Text className={"text-4xl font-bold text-center mt-7"}>Create An Account</Text>
                    <Text className={"text-lg font-bold text-center mb-2"}>Create Your New Account </Text>
                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               placeholder={"Enter Your First Name"}
                               onChangeText={(firstname) => setFirstname(firstname)}>
                    </TextInput>
                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               placeholder={"Enter Your Last Name"}
                               onChangeText={(lastname) => setLastname(lastname)}>
                    </TextInput>
                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               placeholder={"Enter Your Email Address"}
                                 onChangeText={(email) => setEmail(email)}
                                 keyboardType={"email-address"}
                    autoCapitalize={"none"}>
                    </TextInput>
                    <TextInput className={"p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"}
                               secureTextEntry
                               placeholder={"Enter Password"}
                               autoCapitalize={"none"}
                        onChangeText={(password) => setPassword(password)}>
                    </TextInput>


                    <TouchableOpacity className={" py-3 bg-green-600 rounded-xl"}
                    onPress={createUser}>
                        <Text className={"ont-xl font-bold text-center text-white"}>Sign Up</Text>
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
                    <Text className="text-gray-500 font-semibold">Already Have An Account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text className="font-semibold text-green-600"> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}