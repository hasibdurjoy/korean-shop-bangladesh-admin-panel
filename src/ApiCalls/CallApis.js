import axios from "axios";

const baseUrl = "https://dry-tundra-71318.herokuapp.com";

export const getFunction = async (url) => {
  const response = await axios.get(baseUrl + url);
  return response;
};

export const postFunction = async (url, data) => {
  const response = await axios.post(baseUrl + url, data);
  return response;
};

export const updateFunction = async (url, data) => {
  const response = await axios.put(baseUrl + url, data);
  return response;
};

export const deleteFunction = async (url) => {
  const response = await axios.delete(baseUrl + url);
  return response;
};
