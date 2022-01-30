import axios from "axios";

const baseUrl = "http://localhost:3001/api/quizes";

const get = async () => {
  console.log("hi");
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (text, option) => {
  console.log("hi");
  const body = {
    text: text,
    option: option,
  };
  const response = await axios.post(baseUrl, body);
  return response.data;
};

const exportedObject = {
  get,
  create,
};

export default exportedObject;
