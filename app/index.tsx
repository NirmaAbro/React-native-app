import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    >
      <Text style={{
        fontSize: 20,
      }}>hey this is my app</Text>
      <Text>hi this is my first app program </Text>
      <Button title="click me" onPress={() => {alert("hello")}}></Button>
    </View>
  );
}
