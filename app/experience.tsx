import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";
export default function Experience() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* ===== EXPERIÊNCIA PROFISSIONAL ===== */}
      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="briefcase"
          size={24}
          color="#667eea"
          style={styles.icon}
        />
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="rocket" size={20} color="#667eea" />
            <Text style={styles.experienceTitle}>MindIndex</Text>
          </View>
          <Text style={styles.experienceDescription}>
            Foi designado para fazer um projeto para a empresa Pub Produções,
            nesse projeto foi utilizado com apenas a biblioteca react.
          </Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

      <View style={styles.sectionHeader}>
        <MaterialCommunityIcons
          name="school"
          size={24}
          color="#667eea"
          style={styles.icon}
        />
        <Text style={styles.sectionTitle}>Experiência Acadêmica</Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="leaf" size={20} color="#4ade80" />
            <Text style={styles.experienceTitle}>Greenomie</Text>
          </View>
          <Text style={styles.experienceDescription}>
            Durante o primeiro período do curso Sistema para Internet (UNICAP),
            foi proposto um desafio para o meio ambiente. A partir disso surgiu
            o Greenomie, um app que incentiva a compra de produtos recicláveis.
          </Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <MaterialCommunityIcons name="human" size={20} color="#f59e0b" />
            <Text style={styles.experienceTitle}>InclusiveAID</Text>
          </View>
          <Text style={styles.experienceDescription}>
            No segundo período fui chamado para participar de um hackathon que
            busca métodos inclusivos através da tecnologia, surgindo o
            InclusiveAID — um app e site que busca melhorar a experiência do
            usuário de acordo com sua deficiência.
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.footerSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2C2C",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "100%",
    paddingLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E4E4E4",
  },
  card: {
    minWidth: 350,
    margin: 8,
    backgroundColor: "#3a3a3a", // fundo sólido leve
    borderRadius: 12,
    elevation: 3, // sombra suave no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
    maxWidth: 600,
    borderWidth: 1,
    borderColor: "#ffffff10",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  experienceTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    marginLeft: 8,
  },
  experienceDescription: {
    color: "#E4E4E4",
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
