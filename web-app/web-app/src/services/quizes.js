import axios from "axios";

const baseUrl = "http://localhost:3001/api/quizes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const get = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  console.log(response.data);
  return response.data;
};

const exportedObject = {
  getAll,
  get,
};

export default exportedObject;
