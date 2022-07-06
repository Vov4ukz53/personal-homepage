import axios from "axios";

export const getRepositories = async () => {
  const response = await axios.get("https://api.github.com/users/Vov4ukz53/repos");

  return response.data;
};

