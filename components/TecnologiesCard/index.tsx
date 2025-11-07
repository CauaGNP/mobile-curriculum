import { Text, View } from "react-native";
import { Icon } from "react-native-paper";
import { styles } from "./styles";

type TecnologiesCardProps = {
  icon: string;
  tecnologieName: string;
};

export function TecnologiesCard({
  icon,
  tecnologieName,
}: TecnologiesCardProps) {
  return (
    <View style={styles.stackContain}>
      <Text style={{ color: "#113392ff" }}>{tecnologieName}</Text>
      <Icon source={icon} size={40} color="#113392ff" />
    </View>
  );
}
