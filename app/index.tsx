import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRouter } from 'expo-router';
import React from "react";
import { Button, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function Index() {

  const router = useRouter();


  return (
    // <View>
    //   {/* <Text>this is an componenet</Text>
    //   <Welcome />
    //   <Counter></Counter>
    //   <Button title="Click Me" onPress={handlePress} />
    //   <Touchable title="Custom Button" /> */}
    //   {/* <BasicForm /> */}
    //   {/* <ListwithMap/>  */}
    //   {/* <Sectionlist/>  */}
    //   <TouchableHighlightt/> 



    // </View>
    // pass data btw screen , in stack  navigation 

    <View style={{ padding: 20 }}>
      <Button
        title="Go to Details with Data"
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { name: "Nirma", age: "22" },
          })
        }
      />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>🏠 Home Tab</Text>
      </View>

    </View>
  );
}
