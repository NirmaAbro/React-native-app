// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }


// app/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: { backgroundColor: '#fff', height: 60 },
      tabBarLabelStyle: { fontSize: 14 },
      tabBarHideOnKeyboard: true, // hides tab bar when keyboard is open
    }}
  />
  
  );
}
