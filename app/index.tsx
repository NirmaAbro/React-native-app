import BasicForm from "@/components/BasicForm";
import Counter from "@/components/Counter";
import Touchable from "@/components/Touchable";
import React from "react";
import { Button, Text, View } from "react-native";

const Welcome = () => {
  return (
    <View>
      <Text>this is welcome</Text>
    </View>
  );
}


export default function Index() {

  const handlePress = () => {
    alert("Button Pressed!");
  };

  return (
    <View>
      {/* <Text>this is an componenet</Text>
      <Welcome />
      <Counter></Counter>
      <Button title="Click Me" onPress={handlePress} />
      <Touchable title="Custom Button" /> */}
      <BasicForm />
    </View>
  );
}


