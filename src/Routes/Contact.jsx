import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
      }}
    >
      <div
        className="form"
        style={{
          textAlign: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          display: "inline-block",
        }}
      >
        <h2>¿Deseas información adicional?</h2>
        <p>Dejanos tus datos y te contactaremos</p>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
