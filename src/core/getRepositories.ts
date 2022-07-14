import axios from "axios";
import { Repository } from "./personalPageSlice";

export const getRepositories = async () => {
  const response = await axios.get<Repository[]>("https://api.github.com/users/Vov4ukz53/repos");

  return response.data;
};

