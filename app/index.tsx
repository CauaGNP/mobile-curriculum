import { TecnologiesCard } from "@/components/TecnologiesCard";
import { Image, Text, View } from "react-native";
import image from "../assets/hello.png";
import { styles } from "./styles";

export default function Index() {

  return (
    <View>
      <View>
        <Text>Bem vindo ao meu portifolio</Text>
        <Image source={image} style={styles.helloImage} />
      </View>
      <View>
        <Text>Sobre mim</Text>
        <Text>
          Olá!! Eu sou o Cauã Gabriel, tenho 18 anos. Atualmente estou no 4°
          período do curso Sistemas para Internet na UNICAP.Sou desenvolvedor
          front-end, back-end. Gosto de criar soluções que unam tecnologia,
          criatividade e eficiência, e estou sempre buscando aprender coisas
          novas e me desafiar em projetos diferentes.
        </Text>
      </View>
      <View>
        <Text>Tecnologias</Text>
        <View>
          <Text>Front-End</Text>
          <View>
            <TecnologiesCard icon="a" tecnologieName="aa" />
            <TecnologiesCard icon="a" tecnologieName="aa" />
            <TecnologiesCard icon="a" tecnologieName="aa" />
          </View>
        </View>
        <View>
          <Text>Front-End</Text>
          <View>
            <TecnologiesCard icon="a" tecnologieName="aa" />
            <TecnologiesCard icon="a" tecnologieName="aa" />
            <TecnologiesCard icon="a" tecnologieName="aa" />
          </View>
        </View>
      </View>
    </View>
  );
}
