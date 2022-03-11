import React from 'react';
import { Text, ScrollView } from 'react-native';

export default function Home () {
    return (
        <ScrollView style={{ width:'100%' }}>
            <Text style={{textAlign: 'center' , textDecorationColor: 'Red', textTransform: 'uppercase'}}>Home</Text>
        </ScrollView>
    )
}