import { Text, View } from "react-native";
import { Icon } from "react-native-paper";

type TecnologiesCardProps = {
  icon: string;
  tecnologieName: string;
};

export function TecnologiesCard({
  icon,
  tecnologieName,
}: TecnologiesCardProps) {
  return (
    <View>
      <Icon source={icon} size={20} />
      <Text>{tecnologieName}</Text>
    </View>
  );
}
