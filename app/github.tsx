import getData from "@/services/githubApi";
import { useEffect, useState } from "react";
import { Linking, ScrollView } from "react-native";
import { ActivityIndicator, List, MD2Colors } from "react-native-paper";

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
    <ScrollView style={{
      
    }}>
      {repositoryData == null ? <ActivityIndicator size={50} animating={true} color={MD2Colors.blueA400} /> : repositoryData.map((repo: any, index: number) => (
        <List.Item
          key={index}
          title={repo.name}
          description={repo.description || "Sem descrição"}
          left={(props) => <List.Icon {...props} icon="github" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => openRepository(repo.html_url)} 
        />
      )) }
    </ScrollView>
  );
}
