import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistatById } from "../api/Dentista.js";
import { useAppContext } from "../Components/utils/global.context.jsx";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [docSelected, setDocSelected] = useState({});
  const { state, dispatch } = useAppContext();
  console.log(state);

  useEffect(() => {
    const getData = async () => {
      let dentistaData = await getDentistatById(id);
      setDocSelected(dentistaData);
    };
    getData();
    console.log(getData());
  }, [id]);

  if (!docSelected) return <p>Cargando</p>;
  return (
   
      <div class="table-container">
  <div class="table-row table-header">
    <div class="table-cell"><h3>Id del odontologo: {docSelected.id}</h3></div>
    <div class="table-cell"><h3>Nombre: {docSelected.name}</h3></div>
    <div class="table-cell"><h3>Email: {docSelected.email}</h3></div>
    <div class="table-cell"><h3>Telefono: {docSelected.phone}</h3></div>
    <div class="table-cell"><h3>Sitio Web: {docSelected.website}</h3></div>
  </div>
   </div>
  );
};
export default Detail;
