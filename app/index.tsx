import { TecnologiesCard } from "@/components/TecnologiesCard";
import { Image, ScrollView, Text, View } from "react-native";
import image from "../assets/hello.png";
import { generalStyles, indexStyles } from "./styles";

export default function Index() {
  return (
    <ScrollView style={generalStyles.contain}>
      <View style={indexStyles.welcomeSection}>
        <Text
          style={{
            color: "#1a1a1aff",
            fontWeight: "bold",
            fontSize: 18,
            width: 200,
            textAlign: "center",
          }}
        >
          Bem vindo ao meu portfólio
        </Text>
        <Image source={image} style={indexStyles.helloImage} />
      </View>
      <View style={indexStyles.sections}>
        <Text style={generalStyles.title}>Sobre mim</Text>
        <Text style={[generalStyles.paragraph, { textAlign: "center" }]}>
          Olá!! Eu sou o Cauã Gabriel, tenho 18 anos. Atualmente estou no 4°
          período do curso Sistemas para Internet na UNICAP.Sou desenvolvedor
          front-end, back-end. Gosto de criar soluções que unam tecnologia,
          criatividade e eficiência, e estou sempre buscando aprender coisas
          novas e me desafiar em projetos diferentes.
        </Text>
      </View>
      <View style={indexStyles.sections}>
        <Text style={generalStyles.title}>Tecnologias</Text>
        <View
          style={{
            minWidth: 350,
            margin: 8,
            backgroundColor: "#f0f0f0cb",
            borderRadius: 6,
            borderColor: "#ffffffd8",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Text style={generalStyles.tecnologiesSubtitle}>Front-End</Text>
          <View style={indexStyles.stacksContain}>
            <TecnologiesCard icon="react" tecnologieName="React" />
            <TecnologiesCard icon="tailwind" tecnologieName="Tailwind" />
            <TecnologiesCard
              icon="language-javascript"
              tecnologieName="JavaScript"
            />
            <TecnologiesCard
              icon="language-typescript"
              tecnologieName="TypeScript"
            />
          </View>
        </View>
        <View
          style={{
            minWidth: 350,
            margin: 8,
            backgroundColor: "#f0f0f0cb",
            borderRadius: 6,
            borderColor: "#ffffffd8",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Text style={generalStyles.tecnologiesSubtitle}>Back-End</Text>
          <View style={indexStyles.stacksContain}>
            <TecnologiesCard icon="language-java" tecnologieName="Java" />
            <TecnologiesCard icon="language-python" tecnologieName="Python" />
            <TecnologiesCard icon="nodejs" tecnologieName="NodeJs" />
            <TecnologiesCard icon="dolphin" tecnologieName="MySQL" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
