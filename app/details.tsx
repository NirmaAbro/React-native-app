import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';


export default function Details() {
    const { name, age } = useLocalSearchParams();

    return (
        <View>
            {/* 🧠 Tip: */}
            {/* params are always strings — so if you're passing numbers or objects, convert them using JSON.stringify() and JSON.parse() if needed. */}
            <View style={{ padding: 20 }}>
                <Text>User Details</Text>
                <Text>Name: {name}</Text>
                <Text>Age: {age}</Text>
            </View>
        </View>
    )
}