import TouchableHighlightt from "@/components/TouchableHighlightt";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";


const Welcome = () => {
  return (
    <View>
      <Text>this is welcome</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

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
      {/* <BasicForm /> */}
      {/* <ListwithMap/>  */}
      {/* <Sectionlist/>  */}
      <TouchableHighlightt/> 



    </View>
  );
}
