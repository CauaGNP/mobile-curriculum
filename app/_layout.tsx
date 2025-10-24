import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ icon, size }) => <Icon source={icon} size={20} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ icon, size }) => <Icon source={icon} size={20} />,
        }}
      />
    </Tabs>
  );
}
