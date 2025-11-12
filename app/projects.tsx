import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Divider, Text, Title } from "react-native-paper";

export default function Projects() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.projectCard}>
        <Title style={styles.projectTitle}>Y</Title>
        <Text style={styles.projectDescription}>
          O Y foi um projeto fullStack que juntamente com um grupo de amigos
          para finalizar o 2º período do curso Sistemas para Internet. Foi
          utilizado HTML5, CSS3 e javascript para fazer o front-end e xxx para o
          back-end.
        </Text>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.projectCard}>
        <Title style={styles.projectTitle}>GitFind</Title>
        <Text style={styles.projectDescription}>
          O GitFind foi um projeto feito com a biblioteca React com integração
          da API do github para um curso da DIO. Esse projeto tem como objetivo
          procurar perfis do github e mostrar os seus respectivos repositórios.
        </Text>
      </View>

      <View style={styles.footerSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2C2C",
    padding: 16,
  },
  content: {
    paddingBottom: 40,
    alignItems: "center",
  },
  projectCard: {
    minWidth: 350,
    margin: 8,
    backgroundColor: "#f0f0f0cb",
    borderRadius: 6,
    borderColor: "#ffffff1a",
    borderWidth: 1,
    alignItems: "center",
    padding: 20,
    width: "100%",
    maxWidth: 600,
  },
  projectTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
  },
  projectDescription: {
    color: "#000",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },
  divider: {
    marginVertical: 24,
    backgroundColor: "#555",
    width: "80%",
    alignSelf: "center",
  },
  footerSpacer: {
    height: 32,
  },
});
