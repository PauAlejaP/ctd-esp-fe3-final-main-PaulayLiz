import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistatById } from "../api/Dentista.js";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();

  const [docSelected, setDocSelected] = useState({});

  useEffect(() => {
    const getData = async () => {
      let dentistaData = await getDentistatById(id);
      setDocSelected(dentistaData);
    };
    getData();
  }, [id]);

  if (!docSelected) return <p>Cargando</p>;
  return (
    <>
      <h1>Detail Dentist id {docSelected.id}</h1>
      <h2>Nombre: {docSelected.name}</h2>
      <h2>Email: {docSelected.email}</h2>
      <h2>Telefono: {docSelected.phone}</h2>
      <h2>Web: {docSelected.website}</h2>
    </>
  );
};
export default Detail;
