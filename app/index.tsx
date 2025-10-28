import { TecnologiesCard } from "@/components/TecnologiesCard";
import { Image, ScrollView, Text, View } from "react-native";
import image from "../assets/hello.png";
import { styles } from "./styles";

export default function Index() {
  return (
    <ScrollView style={styles.contain}>
      <View style={styles.welcomeSection}>
        <Text>Bem vindo ao meu portifolio</Text>
        <Image source={image} style={styles.helloImage} />
      </View>
      <View style={[styles.sections, { padding: 4, gap: 8 }]}>
        <Text style={styles.fontTitleSections}>Sobre mim</Text>
        <Text style={{ textAlign: "center", color: "#E4E4E4" }}>
          Olá!! Eu sou o Cauã Gabriel, tenho 18 anos. Atualmente estou no 4°
          período do curso Sistemas para Internet na UNICAP.Sou desenvolvedor
          front-end, back-end. Gosto de criar soluções que unam tecnologia,
          criatividade e eficiência, e estou sempre buscando aprender coisas
          novas e me desafiar em projetos diferentes.
        </Text>
      </View>
      <View style={styles.sections}>
        <Text style={styles.fontTitleSections}>Tecnologias</Text>
        <View style={{ alignItems: "center", padding: 8, margin: 8, backgroundColor: "#e4e4e461", borderRadius: 6, borderColor: "#ffffff94", borderWidth: 1 }}>
          <Text style={styles.fontTextStacks}>Front-End</Text>
          <View style={styles.stacksContain}>
            <TecnologiesCard icon="react" tecnologieName="React" />
            <TecnologiesCard icon="tailwind" tecnologieName="Tailwind" />
            <TecnologiesCard icon="language-javascript" tecnologieName="JavaScript" />
            <TecnologiesCard icon="language-typescript" tecnologieName="TypeScript" />

          </View>
        </View>
        <View style={{ alignItems: "center", padding: 8, margin: 8, backgroundColor: "#e4e4e461", borderRadius: 6, borderColor: "#ffffff94", borderWidth: 1 }}>
          <Text style={styles.fontTextStacks}>Back-End</Text>
          <View style={styles.stacksContain}>
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
