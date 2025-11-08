import { Image, ScrollView, Text, View } from "react-native";
import LinkRepository from "../assets/LinkRepository.png";
import ListComponent from "../assets/ListComponent.png";
import tecnologiesCardImage from "../assets/tecnologiesCardImage.png";
import { generalStyles } from "../styles/_styles";
export default function About() {
  return (
    <ScrollView style={generalStyles.contain}>
      <View>
        <Text style={generalStyles.title}>Um pouco sobre mim</Text>
        <Text style={generalStyles.paragraph}>
          Sou Cauã, um entusiasta de tecnologia do Nordeste. Estou construindo
          esse app como parte da minha jornada de aprendizado em React Native.
        </Text>
      </View>

      <View>
        <Text style={generalStyles.title}>Meu sonho</Text>
        <Text style={generalStyles.paragraph}>
          Meu objetivo é fazer minha segunda graduação na UFPE. Cada linha de
          código que escrevo me aproxima desse sonho, e eu economizo para
          investir em cursos e materiais que ampliem meu conhecimento.
        </Text>
      </View>
      <View>
        <Text style={generalStyles.title}>Como eu fiz esse app?</Text>
        <View>
          <Text style={generalStyles.subtitle}>ReactNative Paper(UI KIT)</Text>
          <Text style={generalStyles.paragraph}>
            O React Native Paper é uma biblioteca de componentes baseada no
            Material Design do Google. Ela oferece elementos prontos — como
            botões, ícones, cards e barras de navegação — que tornam o
            desenvolvimento mais rápido e a interface mais profissional.
          </Text>
          <Text style={generalStyles.paragraph}>
            No app, ele foi usado principalmente para os ícones da navegação
            inferior e para manter um visual consistente entre as telas,
            seguindo boas práticas de design móvel.
          </Text>
        </View>
        <View>
          <Text style={generalStyles.subtitle}>Componentes</Text>
          <Text style={generalStyles.paragraph}>
            Nesta aplicação utilizei apenas 1 componente que foram os cards de
            tecnologia. Foi passado como props o nome da stack e o ícone que
            pegamos através do React Native Paper
          </Text>
          <Image
            source={tecnologiesCardImage}
            style={{ width: "100%", height: 300 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            marginBottom: 24,
          }}
        >
          <View>
            <Text style={generalStyles.subtitle}>Funcionalidade Extra</Text>
            <Text style={generalStyles.paragraph}>
              A funcionalidade e extra implementada foi a api do github.
              Utilizando o axios, faço uma requisição para buscar os meus
              repositórios para exibilo na interface, clicado na seta você será
              rederecionado para o meu repositório.
            </Text>
          </View>
          <View>
            <Text style={generalStyles.subtitle}>Lista de repositórios</Text>
            <Image
              source={ListComponent}
              style={{ width: "100%", height: 300 }}
              resizeMode="contain"
            />
            <Text style={generalStyles.paragraph}>
              Utilizamos o método .map() do JavaScript para percorrer todo o
              array repositoryData e renderizar dinamicamente uma lista de
              repositórios. Para cada index, exibimos o nome, descrição. A
              propiedade key é utilizada com o índice para garantir o desempenho
              da lista no React Native.
            </Text>
          </View>
          <View>
            <Text style={generalStyles.subtitle}>Link para o repositório</Text>
            <Image
              source={LinkRepository}
              style={{ width: "100%", height: 300 }}
              resizeMode="contain"
            />
            <Text style={generalStyles.paragraph}>
              Utilizamos uma função assíncrona chamada openRepository para abrir
              um link externo que pegamos através da API do GitHub. Primeiro,
              verificamos se a URL é suportada pelo dispositivo usando
              Linking.canOpenURL(). Se for suportada, abrimos a URL com
              Linking.openURL(). Caso contrário, ou em caso de erro, exibimos
              mensagens de erro no console.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
