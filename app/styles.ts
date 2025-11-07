import { StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({
  contain: {
    backgroundColor: "#2D2C2C",
    padding: 16,
  },
  title: {
    fontSize: 26,
    color: "#E4E4E4",
    margin: 8,
  },
  subtitle: {
    fontSize: 20,
    color: "#E4E4E4",
    margin: 4,
  },
  tecnologiesSubtitle: {
    fontSize: 20,
    color: "#113392ff",
    margin: 4,
  },
  paragraph: {
    color: "#E4E4E4",
  },
});

export const indexStyles = StyleSheet.create({
  welcomeSection: {
    width: "100%",
    backgroundColor: "#f0f0f0cb",
    borderColor: "#ffffffd8",
    borderRadius: 6,
    borderWidth: 1,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  helloImage: {
    height: 200,
    width: 150,
    alignSelf: "center",
  },
  sections: {
    alignItems: "center",
    margin: 16,
    padding: 4,
  },
  stacksContain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const gitHubCard = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0cb",
    borderColor: "#ffffffc9",
    borderRadius: 6,
    borderWidth: 1,
    padding: 8,
    margin: 8,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
