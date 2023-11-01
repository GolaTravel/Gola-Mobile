
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeftIcon,
  HeartIcon,
  ClockIcon,
  MapPinIcon,
  SunIcon,
} from 'react-native-heroicons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const ios = Platform.OS === 'ios';
const topMargin = ios ? 'mt-10' : '';

export default function TravelDestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Destination image */}
      <Image
        source={item.image}
        style={{ width: wp('100%'), height: hp('55%') }}
      />
      <StatusBar style="light" />

      {/* Back button and favorite button */}
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          ...topMargin,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: wp(2),
            borderRadius: wp(7),
            marginLeft: wp(4),
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{
            padding: wp(2),
            borderRadius: wp(7),
            marginRight: wp(4),
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={4}
            color={isFavourite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Title, description, and booking button */}
      <View
        style={{
          borderTopLeftRadius: wp(10),
          borderTopRightRadius: wp(10),
          flex: 1,
          padding: wp(5),
          backgroundColor: 'white',
          marginTop: -hp('14%'),
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: wp(6) }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: wp(7),
                fontWeight: 'bold',
                color: theme.text,
              }}
            >
              {item?.title}
            </Text>
            <Text
              style={{
                fontSize: wp(7),
                color: theme.text,
                fontWeight: 'bold',
              }}
            >
              $ {item?.price}
            </Text>
          </View>
          <Text
            style={{
              fontSize: wp(3.7),
              color: theme.text,
              marginBottom: wp(2),
            }}
          >
            {item?.longDescription}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ClockIcon size={wp(7)} color="skyblue" />
              <View style={{ marginLeft: wp(2) }}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: 'bold',
                    color: theme.text,
                  }}
                >
                  {item.duration}
                </Text>
                <Text
                  style={{
                    color: theme.text,
                    fontSize: wp(4),
                    marginTop: -wp(1),
                  }}
                >
                  Duration
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MapPinIcon size={wp(7)} color="#f87171" />
              <View style={{ marginLeft: wp(2) }}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: 'bold',
                    color: theme.text,
                  }}
                >
                  {item.distance}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SunIcon size={wp(7)} color="orange" />
              <View style={{ marginLeft: wp(2) }}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: 'bold',
                    color: theme.text,
                  }}
                >
                  {item.weather}
                </Text>
                <Text
                  style={{
                    color: theme.text,
                    fontSize: wp(4),
                    marginTop: -wp(1),
                  }}
                >
                  Sunny
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: theme.bg(0.8),
            height: wp(15),
            width: wp(50),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: wp(15) / 2,
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              fontSize: wp(5.5),
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
