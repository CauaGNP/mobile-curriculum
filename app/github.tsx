import getData from "@/services/githubApi";
import { useEffect, useState } from "react";
import { Linking, ScrollView } from "react-native";
import { ActivityIndicator, List, MD2Colors } from "react-native-paper";
import { generalStyles, gitHubCard } from "./styles";

export default function GitHub() {
  const [repositoryData, setRepositoryData] = useState<any>(null);

  const openRepository = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error("Não foi possível abrir a URL:", url);
      }
    } catch (error) {
      console.error("Erro ao abrir link:", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setRepositoryData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <ScrollView style={generalStyles.contain}>
      {repositoryData == null ? (
        <ActivityIndicator
          size={50}
          animating={true}
          color={MD2Colors.blueA400}
        />
      ) : (
        repositoryData.map((repo: any, index: number) => (
          <List.Item
            key={index}
            title={repo.name}
            style={gitHubCard.card}
            description={repo.description || "Sem descrição"}
            left={(props) => (
              <List.Icon
                {...props}
                style={gitHubCard.icon}
                icon="github"
                color="#1a1a1aff"
              />
            )}
            right={(props) => (
              <List.Icon
                {...props}
                style={gitHubCard.icon}
                icon="chevron-right"
                color="#1a1a1aff"
              />
            )}
            onPress={() => openRepository(repo.html_url)}
          />
        ))
      )}
    </ScrollView>
  );
}
