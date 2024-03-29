import axios from "axios";

export const getDentista = async () => {
  let ans = await axios.get("https://jsonplaceholder.typicode.com/users");
  return ans.data;
};
export const getDentistatById = async (id) => {
  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return respuesta.data;
};
