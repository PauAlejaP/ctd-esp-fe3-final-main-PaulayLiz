import axios from "axios";

export const getDentistatById = async (id) => {
  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return respuesta.data;
};
