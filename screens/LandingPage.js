import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, Platform} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {useNavigation} from "@react-navigation/native";


const android = Platform.OS === 'android';
const data = [
    {
        id: '1',
        image: require('../assets/images/1.jpeg'),
        text: 'Lets Explore The World',
    },
    {
        id: '2',
        image: require('../assets/images/2.jpeg'),
        text: 'Visit Tourist Attraction',
    },
    {
        id: '3',
        image: require('../assets/images/3.jpeg'),
        text: 'Get Ready For Next Trip',
    },
];

const LandingPage = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const navigation=useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>{item.text}</Text>

            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                layout={'tinder'}
                data={data}
                renderItem={renderItem}
                sliderWidth={430}
                itemWidth={450}
                activeSlideAlignment={'center'}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                inactiveDotStyle={styles.paginationInactiveDot}
                inactiveDotOpacity={1}
                inactiveDotScale={0.6}
            />

            <Image
                source={require('../assets/images/bottom.png')}
                style={styles.overlayImage}
            />

            <TouchableOpacity className={"bg-green-600"} style={styles.nextButton} onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.nextButtonText}>Get Started</Text>
            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 1000,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        padding: 10,
        marginBottom:-100,
    },
    overlayImage: {
        position: 'absolute',
        bottom: 0,
        height: 250,
        width: '100%',
        resizeMode: 'cover',
    },
    paginationContainer: {
        bottom: 210,
        position: "absolute"
    },
    paginationDot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        marginHorizontal: 8,
        backgroundColor: '#FFFFFF',
    },
    paginationInactiveDot: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        marginHorizontal: 8,
        backgroundColor: '#D3D3D3',
    },
    nextButton: {
        width:320,
        position: 'absolute',
        bottom: 90,
        textAlign: 'center',

        padding: 10,
        borderRadius: 10,
    },
    nextButtonText: {
        textAlign:"center",
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 25,
    },
});

export default LandingPage;