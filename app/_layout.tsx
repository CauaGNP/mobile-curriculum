import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#000",   
        tabBarInactiveTintColor: "#888", 
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          
          tabBarIcon: ({color}) => <Icon source="home" size={30} color={color}/>,
        }}
      />                              
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({color}) => <Icon source="account" size={30} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="github"
        options={{
          title: "GitHub",
          tabBarIcon: ({color}) => <Icon source="github" size={30} color={color}/>,
        }}
      />
    </Tabs>
  );
}
