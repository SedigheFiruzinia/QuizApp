import axios from "axios";

const baseUrl = "http://localhost:3001/api/quizes";

const create = async (text, option) => {
  const body = {
    text: text,
    option: option,
  };
  const response = await axios.post(baseUrl, body);
  return response.data;
};

const exportedObject = {
  create,
};

export default exportedObject;
