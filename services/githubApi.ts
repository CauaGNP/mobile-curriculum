import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
});

export default async function getData() {
  try {
 
    const response = await api.get("/users/CauaGNP/repos");

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do GitHub:", error);
    return null;
  }
}
