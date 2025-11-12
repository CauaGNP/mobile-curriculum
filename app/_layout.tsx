import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888",
        headerStyle: {
          backgroundColor: "#131313ff",
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "#E4E4E4",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color }) => (
            <Icon source="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => (
            <Icon source="account" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projetos",
          tabBarIcon: ({ color }) => (
            <Icon source="notebook" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: "Experiencia",
          tabBarIcon: ({ color }) => (
            <Icon source="lightbulb" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="github"
        options={{
          title: "GitHub",
          tabBarIcon: ({ color }) => (
            <Icon source="github" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
