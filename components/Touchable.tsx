import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Touchable({ title }: { title: string }) {
    const handlePress = () => {
        alert("Custom Button Pressed");
    };

    return (
        <View style={{ padding: 20 }}>
            {/* custom button k  lia hum touchbale opacjity us ekrty hen , jaise ki button */}
            <TouchableOpacity
                onPress={handlePress}
                style={{
                    backgroundColor: "blue",
                    padding: 12,
                    borderRadius: 8,
                }}
            >
                <Text style={{ color: "white", textAlign: "center" }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}