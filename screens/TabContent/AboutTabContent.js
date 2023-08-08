import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const paragraphs = [
    "The Temple of the Sacred Tooth Relic, located in the city of Kandy, Sri Lanka, is a significant Buddhist temple with deep historical and spiritual importance. This temple is renowned for enshrining a relic believed to be a tooth of Gautama Buddha, the founder of Buddhism. The temple's official name is 'Sri Dalada Maligawa.'",
     "Situated within the former royal palace complex of the Kingdom of Kandy, the temple serves as a repository for this revered relic, which holds immense significance to Buddhists around the world. The relic is considered a symbol of spiritual and political power, and its safekeeping has historically been linked to the rulers of Kandy.",
    // "The temple's architecture is an amalgamation of traditional Sri Lankan design and influences from various dynasties. The complex features intricate woodwork, ornate carvings, and stunning artistry, showcasing the cultural richness of the region."
];

const AboutTabContent = () => {
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white', padding: 20, }}
        >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
            {paragraphs.map((paragraph, index) => (
                <Text key={index} style={{ textAlign: 'justify', fontSize: 15, marginBottom: 15 }}>
                    {paragraph}
                </Text>
            ))}
        </ScrollView>
    );
};

export default AboutTabContent;
