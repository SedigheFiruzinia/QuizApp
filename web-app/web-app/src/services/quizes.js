import axios from "axios";

const baseUrl = "http://localhost:3001/api/quizes";

const get = async () => {
  console.log("hi");
  const response = await axios.get(baseUrl);
  return response.data;
};

const exportedObject = {
  get,
};

export default exportedObject;
