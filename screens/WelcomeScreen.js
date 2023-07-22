import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme'
import {useNavigation} from "@react-navigation/native";


export default function WelcomeScreen() {
    const navigation=useNavigation()
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text className="text-white font-bold text-4xl text-center">Lets Get Started</Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/welcome.png")}
                       style={{width:350, height:350}}/>
            </View>
            <View className="space-y-4" >
                <TouchableOpacity className="py-3  mx-7 rounded-xl" style={{backgroundColor: themeColors.btncolor}}
                                  onPress={()=>navigation.navigate("Signup")}>
                    <Text className="text-xl font-bold text-center text-gray-700">
                        Sign UP
                    </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Already Have An Account? </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text className="font-semibold" style={{backgroundColor: themeColors.btncolor}}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    </SafeAreaView>
  )
}