import axios from "axios";

const API_URL = "https://us-central1-TON_PROJET.cloudfunctions.net";

export const getMessages = async () => {
  const res = await axios.get(`${API_URL}/getMessages`);
  return res.data;
};

export const addMessage = async (text: any, user: any) => {
  const res = await axios.post(`${API_URL}/addMessage`, { text, user });
  return res.data;
};
